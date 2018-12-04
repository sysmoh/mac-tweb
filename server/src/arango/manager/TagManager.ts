import AbstractManager from './AbstractManager';
import { aql } from 'arangojs';
import Tag from '../schema/Tag';

class TagManager extends AbstractManager {
    extractTags(content: string) {
        // Extract hashtags and remove # char
        const hashtags = content.match(/#[a-z0-9_]+/g).map(hashtag => hashtag.substr(1).toLowerCase());
        return this.db.query(aql`FOR t IN tags FILTER t.tag IN ${hashtags} RETURN t.tag`)
            .then(cursor => cursor.all()).then((existingTags) => {
                // for each non existing tag, add it in DB
                const diff = hashtags.filter(tag => !existingTags.includes(tag));
                const newTags = diff.map(tag => new Tag(tag));
                return this.collection.import(newTags).then(() => hashtags);
        });
    }
}

export default new TagManager('tags');
