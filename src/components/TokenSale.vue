<template>
  <div id="token-sale" class="row section">
    <!-- title -->
    <div class="col-12 d-flex flex-column">
      <div class="d-flex mb-4">
        <img src="images/image-token.png" class="flower ml-auto mr-0"/>
         <p class="section-title align-self-end ml-0 mr-0 mb-2">{{ $t('sale.title') }}</p>  
        <div class="flower ml-0 mr-auto">&nbsp;</div>
      </div>      
      <p class="section-intro">{{ $t('sale.intro') }}</p>
    </div>
    <!-- 토큰 판매 일정 -->
    <!-- <div class="col-12 col-lg-5 row-margin"> -->
    <div class="col-12">
      <div class="d-flex justify-content-center card-layout">
        <div class="d-flex flex-column justify-content-center hanafuda-card">
          <p class="sale-title">{{ $t('sale.card.first.title') }}</p>
          <p class="sale-info">{{ $t('sale.card.first.info1') }}</p>
          <p class="sale-info">{{ $t('sale.card.first.info2') }}</p>
        </div>
        <div class="d-flex flex-column justify-content-center hanafuda-card ml-4">
          <p class="sale-title">{{ $t('sale.card.second.title') }}</p>
          <p class="sale-info">{{ $t('sale.card.second.info1') }}</p>
          <p class="sale-info">{{ $t('sale.card.second.info2') }}</p>
        </div>
         
      </div>
      <div class="timezone">{{ $t('sale.timezone') }}</div>
    </div>

    <div class="col-12 d-flex flex-column">
      <p class="mt-4">{{ $t('sale.greeting1') }}<br>{{ $t('sale.greeting2') }}</p>
      <p class="section-smalltitle align-self-end">{{ $t('EOSacc.title') }}</p>
      <div class="col-12">
        <p><a href="https://support.get-scatter.com/article/33-creating-an-eos-account"><font size="5">EOS account creation tutorial</font></a></p>
      </div> 
    </div>  
    <!-- MoonPay -->
    <div class="col-12 col-lg-5 d-flex flex-column justify-content-center row-margin">
      <div>
        <p class="section-smalltitle align-self-end ml-0 mr-0 mb-2">{{ $t('moonpay.title') }}</p>
      </div>   
       <iframe class="moonpay-widget"
          id = "moonpayment"
          scrolling="no"
          allowtransparency="true"
          frameborder="0"
          width="100%"     
          height="100%"
          :src="iframe.src"   
        >
      </iframe>
      <!-- 
          :src="iframeSrc"   
       -->
    </div>
    <br>
     <br>
    <!-- <div class="col-12">
       <br>
      <a class="btn btn-moonpay" v-on:click="moonpay">
        <span>{{ $t('Buy EOS using Credit/Debit Card') }}</span>
      </a>
      <br>
      Powered by MoonPay
    </div> -->
    
    <!-- 토큰 구매 UI -->
    <div class="col-12 col-lg-7 d-flex flex-column justify-content-center row-margin">
      <div>
        <p class="section-smalltitle align-self-end ml-0 mr-0 mb-2">{{ $t('purchase.title') }}</p>
      </div>  
      <div class="balance mt-4">
        <div class="label-balance"><img src="images/coins.svg" width="18px" class="mr-2" /> {{ $t('sale.balance') }}</div>
        <div v-if="isLogin" class="d-flex">
          <div class="ml-2 mr-auto">EOS</div>
          <div class="ml-auto mr-2">{{eosBalance}}</div>
        </div>
        <div v-if="isLogin" class="d-flex">
          <div class="ml-2 mr-auto">TAZ</div>
          <div class="ml-auto mr-2">{{tazBalance}}</div>
        </div>
        <div v-if="!isLogin" class="mt-4 mb-3"> {{ $t('sale.login') }}</div>
      </div>
      <div class="mt-4">
        <p class="col-12">{{ $t('sale.payment1') }}</p>
        <p class="col-12">{{ $t('sale.payment2') }}</p>       
      </div>
      <div class="mt-4 my-lg-auto">
        <span class="amount"><input class="amount" type="number" v-model="orderAmount" :placeholder="$t('sale.hint')" />EOS</span>
      </div>
      <div class="mt-4">
        <a class="btn btn-hanafuda" v-on:click="purchase">
          <span><img src="images/ic-trending-up.svg" width="24px" class="mr-1" />{{ $t('sale.btn') }}</span>
        </a>
      </div>
    </div>

    <!-- 토큰 구매 성공 팝업 -->
    <b-modal ref="modal-success" size="md" centered hide-footer hide-header body-class="modal-popup">
      <div class="d-block">
        <p class="text-align-center mt-4 mb-4">{{ $t('sale.success') }}</p>
        <div class="d-flex justify-content-center mb-0 mt-auto">
          <a class="btn btn-danger text-white" @click="closeSuccessPopup()">CLOSE</a>
        </div>
      </div>
    </b-modal>

    <!-- 토큰 구매 실패 팝업 -->
    <b-modal ref="modal-fail" size="md" centered hide-footer hide-header  body-class="modal-popup">
      <div class="d-block">
        <p class="text-align-center">{{ $t('sale.fail') }}</p>
        <p class="text-align-center">{{ $t('sale.fail2') }}</p>
        <div class="d-flex justify-content-center mb-0 mt-auto">
          <a class="btn btn-danger text-white" @click="closeFailPopup()">CLOSE</a>
        </div>
      </div>
    </b-modal>

    <vue-instant-loading-spinner ref="spinner"></vue-instant-loading-spinner>
  </div>
</template>

<script>
import {combineLatest, of} from 'rxjs';
import {flatMap, map, finalize} from 'rxjs/operators';
import VueInstantLoadingSpinner from 'vue-instant-loading-spinner/src/components/VueInstantLoadingSpinner.vue'

export default {
 name: 'tokensale',
  data() {
    return {
      orderAmount: undefined,
      iframe: {     
       src: "https://buy.moonpay.io?apiKey=pk_live_rWGZZt2wV0vLVzH6TV9anIuTn7jES3ho&colorCode=%23CD5C5C&baseCurrencyCode=usd&currencyCode=eos"           
       }
    }
  },
  watch: {
    orderAmount: (v) => {
      if (v === undefined || v.lengh === 0)
        return undefined;
      return v;
    },
    isLogin: (v) => { debugger;
      if (v !== undefined && v.lengh !== 0)
      {     
          document.getElementById("moonpayment").src = "https://buy.moonpay.io?apiKey=pk_live_rWGZZt2wV0vLVzH6TV9anIuTn7jES3ho&colorCode=%23CD5C5C&baseCurrencyCode=usd&currencyCode=eos&walletAddress="+this.user.name;
      }     
    }, 
  },
  computed: { // vuex 값을 component 내에서 접근 하기 위한 메서드 추가
    connected() {
      return this.$store.state.connected;
    },
    isLogin() {
      return this.$store.getters.isLogin;
    },
    user() {
      return this.$store.state.account;
    },
    eosBalance() {
      return this.$store.state.eosBalance;
    },
    tazBalance() {
      return this.$store.state.tazBalance;
    }//,
    // iframeSrc() {     
    //   return "https://buy.moonpay.io?apiKey=pk_live_rWGZZt2wV0vLVzH6TV9anIuTn7jES3ho&colorCode=%23CD5C5C&baseCurrencyAmount=50&baseCurrencyCode=usd&currencyCode=eos"           
    //  }
  },
  methods: {
    /**
     * 구매, orderAmount의 EOS 수량만큼 구매를 시도한다.
     */
    purchase() {
      this.$refs.spinner.show();
      
      // start animate while buying
      combineLatest(
        of(this.orderAmount), // current input EOS amount 
        this.$chain.getEosBalance(this.user.name) // EOS balance check
      ).pipe(
        map(([amount, balance]) => {
          if (!balance || balance.length < 1) throw new Error('Not enough balance.');

          const floatBalance = Number.parseFloat(balance[0].substring(0, balance[0].indexOf(' EOS')))
          const floatAmount = Number.parseFloat(amount);
          if (floatAmount > floatBalance) throw new Error('Not enough balance.');
          
          return floatAmount;
        }),
        flatMap(amount => this.$chain.buy(this.user, amount)),
        flatMap(() => combineLatest(this.$chain.getEosBalance(this.user.name), this.$chain.getTazBalance(this.user.name))),
        finalize(() => {
          this.$refs.spinner.hide();
        })
      ).subscribe(
        ([eos, taz]) => { 
          // show the success message for buying 
          // balance update 
          if (eos && eos.length > 0) {
            this.$store.commit('eosBalance', eos[0]);
          }
          if (taz && taz.length > 0) {
            this.$store.commit('tazBalance', taz[0]);
          }

          this.$refs['modal-success'].show()
        },
        () => {
          this.$refs['modal-fail'].show()
        }
      )
    },
    // moonpay() {
    //   this.user.name = 'eosmoonpay23';//'belugawhaler';
    //   this.orderAmount = 100;
    //   window.location.href = 'https://buy-staging.moonpay.io?apiKey=pk_test_fifMbKjx4woD0YvNL8CbTCJykAiiQH&currencyCode=eos&walletAddress='+this.user.name+'&baseCurrencyAmount='+this.orderAmount+'&baseCurrencyCode=usd';
    // },
    closeSuccessPopup() {
      this.$refs['modal-success'].hide();
    },
    closeFailPopup() {
      this.$refs['modal-fail'].hide();
    }
  },
  components: {
    VueInstantLoadingSpinner
  }
}
</script>

<style lang="scss">
@import "@/scss/main.scss";

$card-width: 120px; //120px
$card-width-lg: 180px;
$card-height: 172px;
$card-height-lg: 260px;

.card-layout {
  height: 172px;
  margin: 1.25rem auto;
  padding: 0, auto;

  @media only screen and (min-width: 992px) {
    height: 260px;
  }
}

.hanafuda-card {
  font-family: Georgia, "Malgun Gothic", serif;
  font-style: normal;
  font-weight: bold;
  font-size: 0.875rem;
  align-items: center;
  text-align: center;
  color: white;
  background-image: url(/images/card-border.svg);
  background-color: transparent;
  background-position: 0;
  background-repeat: no-repeat;
  background-size: $card-width $card-height;
  max-width: $card-width;

  @media only screen and (min-width: 992px) {   
    background-size: $card-width-lg $card-height-lg;
    max-width: $card-width-lg;
  }
}

.sale-title {
  width:$card-width;
  padding: auto;
  padding-bottom: 2rem;

  @media only screen and (min-width: 992px) {
    width: $card-width-lg;
    font-size: 1.25rem;
  }
}

.sale-titleAug {
  width:$card-width;
  padding: auto;

  @media only screen and (min-width: 992px) {
    width: $card-width-lg;
    font-size: 1.25rem;
  }
}

.sale-info {
  font-family: Georgia, "Malgun Gothic", serif;
  font-size: 0.75rem;
  color: #CCCCCC;
  width:$card-width;
  margin: 4px auto;


  @media only screen and (min-width: 992px) {
    font-family: Georgia, "Malgun Gothic", serif;
    width: $card-width-lg;
    font-size: 1.125rem;
  }
}

.timezone {
  font-family: Georgia, "Malgun Gothic", serif;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: normal;

  @media only screen and (min-width: 992px) {
    font-family: Georgia, "Malgun Gothic", serif;
    font-size: 1.125rem;
  }
}

.greeting {
  font-family: Georgia, "Malgun Gothic", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  text-align: justify;
  margin: 16px 0;

  @media only screen and (min-width: 768px) {
    text-align: center;
  }

  @media only screen and (min-width: 992px) {
    font-family: Georgia, "Malgun Gothic", serif;
    font-size: 1.125rem;
  }
}

.moonpay-widget {
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  text-align: justify;
  margin: 16px 0;
  
  @media only screen and (min-height: 450px) {
    min-height: 450px;
    max-height: 550px;
  }
}
span.amount {
  font-family: Georgia, "Malgun Gothic", serif;
  font-size: 1rem;
  border-style: solid;
  border-color: white;
  border-width: 0 0 1px;
  background-color: transparent;

  @media only screen and (min-width: 992px) {
    font-family: Georgia, "Malgun Gothic", serif;
    font-size: 1.5rem;
  }
}

input.amount {
  text-align: center;
  width: 140px;
  border-width: 0;
  background-color: transparent;
  outline: none;
  padding-left: 8px; 
  padding-right: 16px;
  color: white;

  @media only screen and (min-width: 992px) {
    width: 220px;
  }
}

.row-margin {
  margin: 8px auto;

  @media only screen and (min-width: 992px) {
    margin-top: 90px;
  }
}

.text-align-center {
  text-align: center;
}

.balance {
  font-family: Georgia, "Malgun Gothic", serif;
  width: 90%;
  font-size: 14px;
  padding: 8px;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  border-radius: 5px;
  margin: 8px auto auto;

  @media only screen and (min-width: 540px) {
    min-width: 360px;
    max-width: 400px;
  }
}

.label-balance {
  font-family: Georgia, "Malgun Gothic", serif;
  font-size: 16px;
  font-weight: bold;
  margin: auto auto 1rem;
}

.modal-popup {
  background-image: url(../../public/images/panda.svg);
  background-color: white;
  background-repeat: no-repeat;
  background-position-x: left;
  background-position-y: bottom;
  background-size: 90px;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0);
  margin: 10px 10px 0;
  min-height: 162px;
}
</style>
