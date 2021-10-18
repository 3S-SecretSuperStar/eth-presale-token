<template>
  <div id="roadmap" class="row section">
    <!-- title -->
    <div class="col-12 d-flex flex-column mb-4">
      <div class="d-flex mb-4">
        <img src="images/image-roadmap.png" class="flower ml-auto mr-0"/>
        <p class="section-title align-self-end ml-0 mr-0 mb-2">{{ $t('roadmap.title') }}</p>
        <div class="flower ml-0 mr-auto">&nbsp;</div>
      </div>
    </div>

    <!-- 2019 Q1 Q2 -->
    <div class="col-12 d-flex max-width">
      <div class="flex-fill justify-content-end d-none d-md-flex ml-auto mr-0">
        <div class="flex-column w-100">
          <div class="d-flex justify-content-end"><div class="quarter">{{ $t('roadmap.r1st.title') }}</div></div>
          <div class="d-flex flex-row">
            <div><img src="images/roadmap-1guang.svg" class="card"/> </div>
            <div class="w-100 contents">
              <ul>    
                <li class="left">
                  {{ $t('roadmap.r1st.plan0') }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="line mx-2"><img src="images/roadmap-point.png" class="pointer"/></div>
      <div class="flex-fill justify-content-start d-flex ml-auto mr-0 item-right">
        <div class="flex-column w-100">
          <div class="d-flex"><div class="quarter">{{ $t('roadmap.r1st.title') }}</div></div>
          <div class="d-flex flex-row">
            <div class="w-100 text-left contents">
              <ul>    
                <li>
                  {{ $t('roadmap.r1st.plan0') }}
                </li>
              </ul>
            </div>
            <div><img src="images/roadmap-1guang.svg" class="card"/> </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 2019 Q3 -->
    <div class="col-12 d-flex max-width">
      <div class="flex-fill justify-content-end d-none d-md-flex ml-auto mr-0 item-left">
        <div class="flex-column w-100">
          <div class="d-flex justify-content-end"><div class="quarter">{{ $t('roadmap.r2nd.title') }}</div></div>
          <div class="d-flex flex-row">
            <div><img src="images/roadmap-3guang.svg" class="card"/> </div>
            <div class="w-100 contents">
              <ul>    
                <li class="left">{{ $t('roadmap.r2nd.plan0') }}</li>
                <li class="left">{{ $t('roadmap.r2nd.plan1') }}</li>
                <li class="left">{{ $t('roadmap.r2nd.plan2') }}</li>
                <li class="left">{{ $t('roadmap.r2nd.plan3') }}</li>
                <li class="left">{{ $t('roadmap.r2nd.plan4') }}</li>
                <li class="left">{{ $t('roadmap.r2nd.plan5') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="line mx-2"><img src="images/roadmap-point.png" class="pointer"/></div>
      <div class="flex-fill justify-content-start d-flex ml-auto mr-0">
        <div class="flex-column w-100">
          <div class="d-flex"><div class="quarter">{{ $t('roadmap.r2nd.title') }}</div></div>
          <div class="d-flex flex-row">
            <div class="w-100 text-left contents">
              <ul>    
                <li>{{ $t('roadmap.r2nd.plan0') }}</li>
                <li>{{ $t('roadmap.r2nd.plan1') }}</li>
                <li>{{ $t('roadmap.r2nd.plan2') }}</li>
                <li>{{ $t('roadmap.r2nd.plan3') }}</li>
                <li>{{ $t('roadmap.r2nd.plan4') }}</li>
                <li>{{ $t('roadmap.r2nd.plan5') }}</li>
              </ul>
            </div>
            <div><img src="images/roadmap-3guang.svg" class="card"/> </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 2019 Q4 -->
    <div class="col-12 d-flex max-width">
      <div class="flex-fill justify-content-end d-none d-md-flex ml-auto mr-0">
        <div class="flex-column w-100">
          <div class="d-flex justify-content-end"><div class="quarter">{{ $t('roadmap.r3th.title') }}</div></div>
          <div class="d-flex flex-row">
            <div><img src="images/roadmap-8guang.svg" class="card"/> </div>
            <div class="w-100 contents">
              <ul>    
                <li class="left">{{ $t('roadmap.r3th.plan0') }}</li>
                <li class="left">{{ $t('roadmap.r3th.plan1') }}</li>
                <li class="left">{{ $t('roadmap.r3th.plan2') }}</li>
                <li class="left">{{ $t('roadmap.r3th.plan3') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="line mx-2"><img src="images/roadmap-point.png" class="pointer"/></div>
      <div class="flex-fill justify-content-start d-flex ml-auto mr-0 item-right">
        <div class="flex-column w-100">
          <div class="d-flex"><div class="quarter">{{ $t('roadmap.r3th.title') }}</div></div>
          <div class="d-flex flex-row">
            <div class="w-100 text-left contents">
              <ul>    
                <li>{{ $t('roadmap.r3th.plan0') }}</li>
                <li>{{ $t('roadmap.r3th.plan1') }}</li>
                <li>{{ $t('roadmap.r3th.plan2') }}</li>
                <li>{{ $t('roadmap.r3th.plan3') }}</li>
              </ul>
            </div>
            <div><img src="images/roadmap-8guang.svg" class="card"/> </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 2020 -->
    <div class="col-12 d-flex max-width">
      <div class="flex-fill justify-content-end d-none d-md-flex ml-auto mr-0 item-left">
        <div class="flex-column w-100">
          <div class="d-flex justify-content-end"><div class="quarter">{{ $t('roadmap.r4th.title') }}</div></div>
          <div class="d-flex flex-row">
            <div><img src="images/roadmap-10guang.svg" class="card"/> </div>
            <div class="w-100 contents">
              <ul>    
                <li class="left">{{ $t('roadmap.r4th.plan0') }}</li>
                <li class="left">{{ $t('roadmap.r4th.plan1') }}</li>
                <li class="left">{{ $t('roadmap.r4th.plan2') }}</li>   
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="line mx-2"><img src="images/roadmap-point.png" class="pointer"/></div>
      <div class="flex-fill justify-content-start d-flex ml-auto mr-0">
        <div class="flex-column w-100">
          <div class="d-flex"><div class="quarter">{{ $t('roadmap.r4th.title') }}</div></div>
          <div class="d-flex flex-row">
            <div class="w-100 text-left contents">
              <ul>    
                <li>{{ $t('roadmap.r4th.plan0') }}</li>
                <li>{{ $t('roadmap.r4th.plan1') }}</li>
                <li>{{ $t('roadmap.r4th.plan2') }}</li>   
              </ul>
            </div>
            <div><img src="images/roadmap-10guang.svg" class="card"/> </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "@/scss/main.scss";

.max-width {
  max-width: 420px;
  margin: auto;

  @media only screen and (min-width: 768px) {
    max-width: 960px;
  }
}

.item-right {
  visibility: visible !important;

  @media only screen and (min-width: 768px) {
    visibility: hidden !important;
  }
}

.item-left {
  visibility: visible !important;

  @media only screen and (min-width: 768px) {
    visibility: hidden !important;
  }
}

.quarter {
  min-width: 200px;
  min-height: 38px;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  color: white;
  background: linear-gradient(180deg, #DA241C 0%, #5B110D 100%);
  border: 1px solid rgba(212, 35, 27, 0.5);
  border-radius: 20px;
  padding-top: 3px;
  margin: 8px 4px;
}

.contents {
  font-family: Georgia, "Malgun Gothic", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  min-width: 150px;
}

.card {
  width: 80%;
  margin-left: 16px;
  margin-bottom: 8px;

  @media only screen and (min-width: 768px) {
    margin-left: 0px;
    width: 100%;
  }
}

.line {
  background-image: url(../../public/images/roadmap-line.svg);
  background-repeat: repeat-y;
  background-position: center;
}

.pointer {
  margin: 0.15rem 0 0;
}
</style>

<style lang="scss" scoped>
ul {
  list-style-type: none;
}

ul li:before {
  content: '-';
  position: absolute;
  margin-left: -20px;
}

li {
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  text-align: left;
  letter-spacing: 0.05rem;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
}

li::before {
  padding-right: 16px;
}

li.left {
  text-align: right;
}
</style>
