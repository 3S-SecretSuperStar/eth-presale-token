import Vue from 'vue';
import Vuex from 'vuex';
// import isEmpty from 'validator/lib/isEmpty';

Vue.use(Vuex);

/**
 * Define the states
 */
const state = {
  connected: false,
  account: {},
  eosBalance: '0.0000 EOS',
  tazBalance: '0.0000 TAZ',
}

/**
 * Define the functions to mutate the state
 */
const mutations = {
  connect(state, connected) {
    state.connected = connected
  },
  account(state, account) {
    if (!account) {
      state.account = {};
    } else {
      state.account = account;
    }
  },
  eosBalance(state, bal) {
    state.eosBalance = bal
  },
  tazBalance(state, bal) {
    state.tazBalance = bal
  }
}

/**
 * Define the vuex actions
 */
const actions = {

}

/**
 * Define the getters
 */
const getters = {
  isLogin: state => {
    return (state.account.name !== undefined)
  },
  user: state => {
    if (!state.account.name) return '';
    return state.account.name;
  }
}

// export vuex object
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
