<template>
  <div id="tokens" class="row section">
    <!-- title -->
    <div class="col-12 d-flex flex-column">
      <div class="d-flex mb-4">
        <img src="images/image-taz.png" class="flower ml-auto mr-0"/>
        <p class="section-title align-self-end ml-0 mr-0 mb-2">{{ $t('tokens.title') }}</p>
        <div class="flower ml-0 mr-auto">&nbsp;</div>
      </div>
      <p class="section-intro">{{ $t('tokens.intro') }}</p>
    </div>
    <div class="col-12">
      <p class="script">{{ $t('tokens.greeting') }}</p>
      <img id="taz-coin-image" src="images/taz.svg" class="mt-5"/>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@import "@/scss/main.scss";

p.script {
  font-family: Georgia, "Malgun Gothic", serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: normal;
  color: white;
  line-height: 22px;
  text-align: justify;

  @media only screen and (min-width: 992px) {
    font-family: Georgia, "Malgun Gothic", serif;
    text-align: center;
    font-size: 1.125rem;
  }
}

#taz-coin-image {
  width: 70%;

  @media only screen and (min-width: 768px) {
    width: 60%;
  }

  @media only screen and (min-width: 992px) {
    width: 50%;
  }

  @media only screen and (min-width: 1200px) {
    width: 40%;
  }
}
</style>
