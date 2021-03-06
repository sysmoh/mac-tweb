import Vue from 'vue';
import Toasted from 'vue-toasted';
import ClickOutside from 'vue-click-outside';
import InfiniteScroll from 'vue-infinite-scroll';
import ElementUI from 'element-ui';

import moment from 'moment';
import 'moment/locale/fr';
import VueMoment from 'vue-moment';

import router from './router';
import store from './store/index';
import App from './App.vue';

import './assets/icons';
import './assets/scss/main.scss';
import apolloProvider from './apollo';

// custom
import FilenameFilter from './filters/filename';
import SizeFilter from './filters/size';

Vue.filter('filename', FilenameFilter);
Vue.filter('size', SizeFilter);
Vue.directive('clickOutside', ClickOutside);

Vue.config.productionTip = false;

Vue.use(InfiniteScroll);
Vue.use(ElementUI);
Vue.use(Toasted, {
    position: 'top-center',
    duration: 3000,
});
Vue.use(VueMoment, { moment });

new Vue({
    router,
    store,
    apolloProvider,
    render: h => h(App),
}).$mount('#app');
