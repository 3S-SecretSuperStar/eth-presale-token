<template>
  <div class="row">
    <div class="col d-flex flex-column box">
      <p class="title"><span class="guang">光</span>{{ $t('header.title') }}</p>
      <p class="slogan">{{ $t('header.slogan') }}</p>
      <p class="intro">{{ $t('header.intro') }}</p>
      <div class="button-group">
        <a class="btn btn-hanafuda btn-whitepaper ml-0 mr-1" :href="whitepaper()" target="whitepaper">
          <span class="d-none d-md-block">
            <img src="images/ic-save.svg" class="label-whitepaper"/>
            {{ $t('header.whitepaper') }}
          </span>
          <span class="d-md-none d-block">
            {{ $t('header.whitepaper') }}
          </span>
        </a>
        <a class="btn btn-hanafuda btn-whitepaper ml-1 mr-0" href="#token-sale">
          <span class="d-none d-md-block">
            <img src="images/ic-go.svg" class="label-whitepaper"/>
            {{ $t('nav.token_sale') }}
          </span>
          <span class="d-md-none d-block">
            {{ $t('nav.token_sale') }}
          </span>
        </a>
      </div>
      <div class="sns d-flex justify-content-center">
        <div class="d-block icon" v-for="media in socialMedia" :key="media.id">
          <a class="btn btn-link" :href="media.url" target="_blank"><img :src="media.icon" class="icon"/></a>
         <!-- <div>{{media.lang}}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // social media icon
      socialMedia: [
        {
          id: 0,
          icon: 'images/ic-telegram.svg',
          lang: 'EN',
          url: 'https://t.me/guangsicbo_official/'
        },
        {
          id: 1,
          icon: 'images/ic-twitter.svg',
          lang: 'EN',
          url: 'https://twitter.com/guanggame'
        },/*
        {
          id: 1,
          icon: 'images/ic-telegram.svg',
          lang: 'CN',
          url: 'https://t.me/guangsicbocn/'
        },
        {
          id: 2,
          icon: 'images/ic-telegram.svg',
          lang: 'KR',
          url: 'https://t.me/guangsicbokr/'
        },*/
        {
          id: 2,
          icon: 'images/ic-medium.svg',
          lang: 'EN',
          url: 'https://medium.com/guang-game'
        }
      ]
    }
  },
  methods: {
    /**
     * 현재 언어에 따른 백서 다운로드 링크를 반환한다.
     */
    whitepaper() {
      switch (this.$i18n.locale) {
        case 'zh':
          return '/whitepaper/Guang_Game_White_Paper_ZH.pdf';
        case 'ko':
          return '/whitepaper/Guang_Game_White_Paper_KO.pdf';
        case 'tr':
          return '/whitepaper/Guang_Game_White_Paper_TR.pdf';
      }
      return '/whitepaper/Guang_Game_White_Paper_EN.pdf';
    }
  }
}
</script>


<style lang="scss">
@import "@/scss/main.scss";

@-webkit-keyframes neon5 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #FF9900, 0 0 30px #FF9900;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #FF9900, 0 0 20px #FF9900;
  }
}

.box {
  @media only screen and (min-width: 768px) {
    height: 100vh;
    min-height: 1060px;
    margin-top: -77px;
  }
}

.title {
  font-family: Georgia, "Malgun Gothic", serif;
  font-size: 56px;
  font-weight: bold;
  letter-spacing: 0;
  text-shadow: 4px 4px rgba($color: hsl(29, 98%, 21%), $alpha: 1.0);
  margin: 56px auto 0;

  @media only screen and (min-width: 768px) {
    font-family: Georgia, "Malgun Gothic", serif;
    font-size: 84px;
    margin: auto auto 0;
  }

  @media only screen and (min-width: 992px) {
    font-family: Georgia, "Malgun Gothic", serif;
    font-size: 120px;
  }
}

span.guang {
  -webkit-animation: neon5 1.5s ease-in-out infinite alternate;
  -moz-animation: neon5 1.5s ease-in-out infinite alternate;
  animation: neon5 1.5s ease-in-out infinite alternate;
}

p.slogan {
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.8px;
  margin: 28px auto 0;

  @media only screen and (min-width: 768px) {
    font-size: 28px;
    margin-top: 64px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 40px;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 44px;
  }
}

p.intro {
  font-size: 14px;
  text-shadow: 0 4px black;
  text-align: justify;
  margin: 24px auto 0;
  max-width: 860px;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    text-align: center;
    margin-top: 56px;
  }

  @media only screen and (min-width: 992px) {
    max-width: 860px;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 900px;
  }
}

.button-group {
  margin-top: 52px;

  @media only screen and (min-width: 768px) {
    margin-top: 64px;
  }
}

.btn-whitepaper {
  width: 140px;

  @media only screen and (min-width: 768px) {
    width: 200px;
  }
}

img.label-whitepaper {
  width: 24px;
  @media only screen and (min-width: 768px) {
  }
}

.sns {
  margin: 36px auto 36px;
  padding: 0;

  @media only screen and (min-width: 768px) {
    margin-top: 76px;
    margin-bottom: auto;
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
  }
}

div.icon {
  font-size: 0.75rem !important;
  font-weight: 500;
  letter-spacing: 0rem;
  color: #CCCCCC;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

img.icon {
  width: 2.813rem;
  margin: 0rem;
  padding: 0rem;
}
</style>
