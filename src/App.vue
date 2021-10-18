<template>
<div id="app" class="container-fluid">
  <!-- 상단 메뉴 -->
  <div class="container">
    <naviation />
  </div>

  <!-- 컨텐츠 영역 -->
  <div class="container">
    <introduction/>
    <token-sale />
    <games />
    <tokens />
    <roadmap />
    <partners />
    <contact />
  </div>

  <!-- 화면의 최상단으로 이동하기 위한 floating action button -->
  <a class="fab" v-scroll-to="'#app'" ><img src="images/ic-chevron-up.svg" width="24px" class="fab-icon" /></a>
</div>
</template>

<script>
import {combineLatest, of} from 'rxjs';
import {flatMap} from 'rxjs/operators';

const Navigation = () => import('@/components/Navigation.vue');
const Introduction = () => import('@/components/Introduction.vue');
const TokenSale = () => import('@/components/TokenSale.vue');
const Games = () => import('@/components/Games.vue');
const Tokens = () => import('@/components/Tokens.vue');
const Roadmap = () => import('@/components/Roadmap.vue');
//import Partners from '@/components/Partners.vue';
const Partners = () => import('@/components/Partners.vue');
const Contact = () => import('@/components/Contact.vue');

export default {
  name: 'app',
  data() {
    return {}
  },
  created() {
    this.$chain.connect().subscribe({
      next: (connected) => {
        this.$store.commit('connect', connected)
        if (connected) {
          this.$chain.login().pipe(
            flatMap(account => combineLatest(of(account), this.$chain.getEosBalance(account.name),
                                              this.$chain.getTazBalance(account.name)))
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
        }
      }
    })
  },
  components: {
    'naviation': Navigation,
    'introduction': Introduction,
    'token-sale': TokenSale,
    'games': Games,
    'tokens': Tokens,
    'roadmap': Roadmap,
    'contact': Contact,
    'partners': Partners
  }
}
</script>

<style lang="scss">
@import "@/scss/main.scss";

.fab-icon {
  margin-top: -24px; 
}

.fab {
  background: rgba(255, 255, 255, 0.5);
	width: 52px;
	height: 52px;
	border-radius: 50%;
	text-align:center;
	color: white;
	box-shadow:0px 0px 3px rgba(0,0,0,0.5),3px 3px 3px rgba(0,0,0,0.25);
	position: fixed;
  bottom: 27px;
	right: 27px;
	font-size: 2.6667em;
	display: inline-block;
	cursor: pointer;
}

#app {
  background-image: url(../public/images/bg-cherrytree.svg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position-x: right;
  background-position-y: 90px;
  background-size: 192px; // xs

  @media only screen and (min-width: 375px) {
    background-size: 225px; // iPhone 6
  }
  
  @media only screen and (min-width: 414px) {
    background-size: 248px; // iPhone 6 plus
  }

  @media only screen and (min-width: 768px) {
    background-size: 422px; // iPad
  }

  @media only screen and (min-width: 992px) {
    background-position-y: 120px;
    background-size: 562px; // iPad pro
  }

  @media only screen and (min-width: 1200px) {
    background-size: 660px;
  }
}
</style>
