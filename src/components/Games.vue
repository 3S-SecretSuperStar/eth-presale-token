<template>
  <div id="games" class="row section">
    <!-- title -->
    <div class="col-12 d-flex flex-column">
      <div class="d-flex mb-4">
        <img src="images/image-games.png" class="flower ml-auto mr-0"/>
        <p class="section-title align-self-end ml-0 mr-0 mb-2">{{ $t('games.title') }}</p>
        <div class="flower ml-0 mr-auto">&nbsp;</div>
      </div>
      <p class="section-intro">{{ $t('games.intro') }}</p>
    </div>
    <!-- 게임 소개 -->
    <div class="col-12 d-flex flex-wrap justify-content-center bg">
      <div class="game-card-layout"><img :src="card1" class="game-card"/></div>
      <div class="game-card-layout"><img :src="card2" class="game-card"/></div>
      <div class="game-card-layout"><img :src="card3" class="game-card"/></div>
      <div class="game-card-layout"><img :src="card4" class="game-card"/></div>
      <div class="game-card-layout"><img :src="card5" class="game-card"/></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card1: '/images/gamecard-en-1.svg',
      card2: '/images/gamecard-en-2.svg',
      card3: '/images/gamecard-en-3.svg',
      card4: '/images/gamecard-en-4.svg',
      card5: '/images/gamecard-en-5.svg',
    }
  },
  mounted() {
    // 최초 진입시 표시언에 맞는 이미지로 게임 카드를 표시
    this.onChangeLanguage();
    this.$events.subscribe(
      event => {
        if (event.name === 'CHANGE_LANG') {
          this.onChangeLanguage(event.code);
        }
      }
    )
  },
  methods: {
    /**
     * 현재 표시 언어에 맞는 이미지로 게임 카드를 교체
     */
    onChangeLanguage() {
      if (this.$i18n.locale === 'ko') {
          this.card1 = '/images/gamecard-ko-1.svg';
          this.card2 = '/images/gamecard-ko-2.svg';
          this.card3 = '/images/gamecard-ko-3.svg';
          this.card4 = '/images/gamecard-ko-4.svg';
          this.card5 = '/images/gamecard-ko-5.svg';
        } else if (this.$i18n.locale === 'zh') {
            this.card1 = '/images/gamecard-zh-1.svg';
            this.card2 = '/images/gamecard-zh-2.svg';
            this.card3 = '/images/gamecard-zh-3.svg';
            this.card4 = '/images/gamecard-zh-4.svg';
            this.card5 = '/images/gamecard-zh-5.svg';
        } else {
          this.card1 = '/images/gamecard-en-1.svg';
          this.card2 = '/images/gamecard-en-2.svg';
          this.card3 = '/images/gamecard-en-3.svg';
          this.card4 = '/images/gamecard-en-4.svg';
          this.card5 = '/images/gamecard-en-5.svg';
        }
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/main.scss";
.bg {
  background-color: transparent;
  border: none;
  margin: 16px, 0;
}

.game-card {
  width: 85%;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: 768px) {
    margin-top: 3rem;
    margin-bottom: 2rem;
    width: 90%;
  }

  @media only screen and (min-width: 992px) {
    width: 85%;
  }

  @media only screen and (min-width: 1200px) {
    width: 80%;
  }
}

.game-card-layout {
  width: 50%;
  align-items: center;
  background-color: transparent;
  border: none;
  @media only screen and (min-width: 768px) {
    width: 20%;
  }
}
</style>