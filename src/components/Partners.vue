<template>
  <div id="partners" class="container box">
    <div class="col-12 d-flex flex-column">
      <div class="d-flex mb-4">
        <img src="images/image-partner.png" class="flower ml-auto mr-0"/>
        <p class="section-title align-self-end ml-0 mr-0 mb-2">{{ $t('partners.title') }}</p>
        <div class="flower ml-0 mr-auto">&nbsp;</div>
      </div>   
      <br>
      <br> 
      <!-- <div class="col-12">
        <img id="partner1" src="images/logo_eosio.jpg" style="width:300px"/>
      </div> -->
      <!-- <div class="col-12">
        <img id="partner2" src="images/logo_scatter.jpg" style="width:400px"/>
      </div> -->
      <br>
      <br>
      <div id='centreDiv'>
        <img class="logo" id="partner1" src="images/logo_moonpay.png"/> 
      </div>
      <br>
      <br>
      <div id='centreDiv'>
        <img class="logo2" id="partner2" src="images/logo_sistemkoin.png"/> 
      </div>
      <!-- <div class="col-12">
        <img id="partner2" src="images/adshare.png" style="width:600px"/>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@import "@/scss/main.scss";

#centreDiv {
  -webkit-align-self: center; /* Safari 7.0+ */
  align-self: center;
}

.logo {
  @media only screen and (min-width: 200px) {
    min-width: 200px;
    max-width: 300px;
    -webkit-align-self: center; /* Safari 7.0+ */
    align-self: center;
  }
}
.logo2 {
  @media only screen and (min-width: 300px) {
    min-width: 300px;
    max-width: 400px;
    -webkit-align-self: center; /* Safari 7.0+ */
    align-self: center;
  }
}
</style>
