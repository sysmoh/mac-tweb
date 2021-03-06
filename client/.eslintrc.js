module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: 'off',
        'linebreak-style': 'off',
        'no-underscore-dangle': 'off',
        'vue/no-textarea-mustache': 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
