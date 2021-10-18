<template>
  <b-navbar toggleable="lg" type="dark" sticky class="nav-pad">
    <b-navbar-brand href="#"><img src="images/logo-menu.svg" class="brand"/></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav class="ml-2">
      <b-navbar-nav class="menu">
        <b-nav-item class="menu-item" v-scroll-to="'#app'">{{ $t('nav.home') }}</b-nav-item>
        <b-nav-item class="menu-item" v-scroll-to="'#token-sale'">{{ $t('nav.token_sale') }}</b-nav-item>
        <b-nav-item class="menu-item" v-scroll-to="'#games'">{{ $t('nav.games') }}</b-nav-item>
        <b-nav-item class="menu-item" v-scroll-to="'#tokens'">{{ $t('nav.taz_chip') }}</b-nav-item>
        <b-nav-item class="menu-item" href="#partners">{{ $t('nav.partners') }}</b-nav-item>
        <b-nav-item class="menu-item" v-scroll-to="'#roadmap'">{{ $t('nav.roadmap') }}</b-nav-item>
        <b-nav-item class="menu-item" v-scroll-to="'#contact'">{{ $t('nav.contact') }}</b-nav-item>
      </b-navbar-nav>

      <!-- 표시 언어 선택 -->
      <b-navbar-nav class="ml-auto mr-0 menu-item">
        <b-nav-item-dropdown :text="$t('nav.selected_lang')">
          <b-dropdown-item @click="setLanguage('zh')">中国话</b-dropdown-item>
          <b-dropdown-item @click="setLanguage('en')">English</b-dropdown-item>
          <b-dropdown-item @click="setLanguage('ko')">한국어</b-dropdown-item>
          <b-dropdown-item @click="setLanguage('tr')">Türk</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- scatter login ui -->
      <a class="btn btn-scatter mr-0" v-if="!isLogin" @click="login()"></a>
      <b-navbar-nav v-else class="ml-0 mr-0 menu-item">
        <b-nav-item-dropdown id="nav7_ddown" :text="user" right>
          <b-dropdown-item> {{eosBalance}} </b-dropdown-item>
          <b-dropdown-item> {{tazBalance}} </b-dropdown-item>          
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>

    <!-- scatter 로그인 실패 팝업 -->
    <b-modal ref="modal-scatter" size="md" centered hide-footer hide-header  body-class="modal-popup">
      <div class="d-block">
        <p class="text-align-center mt-4 mb-4">{{ $t('popup.cnf_scatter') }}</p>
        <div class="d-flex justify-content-center mb-0 mt-auto">
          <a class="btn btn-danger text-white" @click="closeScatterPopup()">CLOSE</a>
        </div>
      </div>
    </b-modal>
  </b-navbar>
</template>

<script>
import {combineLatest, of} from 'rxjs';
import {flatMap} from 'rxjs/operators';

export default {
  name: 'Navigation',
  computed: {
    connected() {
      return this.$store.state.connected;
    },
    isLogin() {
      return this.$store.getters.isLogin;
    },
    user() {
      return this.$store.getters.user;
    },
    eosBalance() {
      return this.$store.state.eosBalance;
    },
    tazBalance() {
      return this.$store.state.tazBalance;
    }
  },
  methods: {
    setLanguage(code) {
      if (this.$i18n.locale !== code) {
        if (!this.$loadedLanguages[code]) {
          return import(/* webpackChunkName: "lang-[request]" */ `@/languages/${code}`).then(msgs => {
            this.$i18n.setLocaleMessage(code, msgs.default)
            this.$loadedLanguages[code] = msgs;
            this.$i18n.locale = code;
            localStorage.setItem('TazSaleLang', code);
            this.$events.next({name: 'CHANGE_LANG', code});
          })
        }
        this.$i18n.locale = code;
        localStorage.setItem('TazSaleLang', code);
        this.$events.next({name: 'CHANGE_LANG', code});
      }
    },
    login() {
      if (this.connected) {
        this.$chain.login().pipe(
          flatMap(account => combineLatest(of(account), this.$chain.getEosBalance(account.name), this.$chain.getTazBalance(account.name)))
        ).subscribe({
          next: ([account, eos, taz]) => {
            this.$store.commit('account', account);
            if (eos && eos.length > 0) {
              this.$store.commit('eosBalance', eos[0]);
            }
            if (taz && taz.length > 0) {
              this.$store.commit('tazBalance', taz[0]);
            }
          }
        })
      } else {
        this.$refs['modal-scatter'].show();
      }
    },
    closeScatterPopup() {
      this.$refs['modal-scatter'].hide();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.brand {
  width: 160px;
  @media only screen and (min-width: 768px) {
    width: 180px;
  }
}

.nav-pad {
  padding-top: 16px !important;

  @media only screen and (min-width: 768px) {
    padding-top: 27px !important;
  }
}

.menu-item {
  font-family: Georgia, "Malgun Gothic", serif;
  font-size: 16px;
  margin-top: 10px !important;
}

.btn-scatter {
  width: 10.125rem;
  height: 2.75rem;
  padding: 0rem;
  background-image: url(../../public/images/gs_button_loginwithscatter_blue.svg);
  background-color: #00A8FF;
  background-repeat: no-repeat;
  background-size: 100%;
  outline: 0 !important;
  border: none;
}

.btn-scatter:hover {
  background-image: url(../../public/images/gs_button_loginwithscatter_gray.svg);
}

</style>
