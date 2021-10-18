<template>
  <div id="contact" class="row section">
    <div class="col-12 d-flex flex-column">
      <div class="d-flex mb-4">
        <img src="images/image-contact.png" class="flower ml-auto mr-0"/>
        <p class="section-title align-self-end ml-0 mr-0 mb-2">{{ $t('contact.title') }}</p>
        <div class="flower ml-0 mr-auto">&nbsp;</div>
      </div>
    </div>
    <div class="col-12 col-md-6 d-flex flex-column align-items-center mt-5">
      <p class="font24 gapinbox">{{ $t('contact.email.title') }}</p>
      <p class="font24"> {{ $t('contact.email.data') }} </p>
    </div>
    <div class="col-12 col-md-6 d-flex flex-column align-items-center mt-5">
        <p class="font24 gapinbox d-flex justify-content-center">{{ $t('contact.sns.title') }}</p>
        <div class="d-flex">
          <div class="d-flex flex-column justify-content-center icon" v-for="media in socialMedia" :key="media.id">
            <a class="btn btn-link" :href="media.url" target="_blank"><img :src="media.icon" class="icon"/></a>
          </div>
        </div>
    </div>
    <div class="col-12 mt-5">
      <p> <img src="images/logo-footer.svg" class="guang-img mt-5" id="hp" height="126px"/></p>
      <p class="font14 mt-4">{{ $t('contact.copyright') }}</p> 
      <p class="font14 text-justify text-md-center mt-5 mx-0 mx-md-5">{{ $t('contact.message') }}</p> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        },/*,
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
  }
}
</script>

<style lang="scss">
@import "@/scss/main.scss";
.font14{
  font-family: Georgia, "Malgun Gothic", serif;
  font-weight: 500;
  font-size: 0.75rem;
  letter-spacing: 0em;

  @media only screen and (min-width: 992px) {
    font-size: 0.875rem;
  }
}

.font24{
  font-family: Georgia, "Malgun Gothic", serif;
  letter-spacing: 0em;
  height: 47px; 
  font-size: 0.875rem;
  font-weight: 400;

  @media only screen and (min-width: 992px) {
    font-family: Georgia, "Malgun Gothic", serif;
    height: 54px; 
    font-size: 1.5rem;
  }
}

img.icon {
  width: 2.813rem;
  margin: 0rem;
  padding: 0rem;
}

div.icon { 
  font-size: 0.75rem !important;
  font-weight: 500;
  letter-spacing: 0rem;
  margin: auto, 0.2rem;

  @media only screen and (min-width: 576px) {
    font-size: 1.125rem;
    margin: auto, 1rem;
  }

  @media only screen and (min-width: 768px) {
    width: 5.5em;
  }
}

div.h3{
  margin-bottom: 0rem;

@media only screen and (min-width: 992px) {
    margin-bottom:0.5rem;
  }
}

</style>
