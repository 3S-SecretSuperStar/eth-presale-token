import Vue from 'vue';
import App from './App.vue';
import VueI18n from 'vue-i18n';
import { NavbarPlugin, ModalPlugin } from 'bootstrap-vue/es/components';
import store from './store';
import Blockchain from './blockchain';

import './scss/main.scss';

// bootstrap-vue 초기화
Vue.use(NavbarPlugin);
Vue.use(ModalPlugin);

Vue.config.productionTip = false;

// 블록체인과 연동하기 위한 모듈을 초기화
Vue.prototype.$chain = new Blockchain();

// 메뉴 이동시 스크롤 처리를 위한 모듈 초기화
import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo);

// 이벤트 버스로 사용할 subject 등록
import { Subject } from 'rxjs'
Vue.prototype.$events = new Subject();

// 다국어 지원을 위한 VueI18n 초기화, 빠른 초기 기동을 위해 lazzy loading으로 구현
Vue.use(VueI18n);
const defalutLang = localStorage.getItem('TazSaleLang') || 'en';
import( /* webpackChunkName: "lang-[request]" */ `@/languages/${defalutLang}`).then(msgs => {
  const messages = {};
  messages[defalutLang] = msgs.default;

  Vue.prototype.$loadedLanguages = [defalutLang];
  const i18n = new VueI18n({
    locale: defalutLang,
    messages
  });

  new Vue({
    store,
    i18n,
    render: h => h(App)
  }).$mount('#app')
})