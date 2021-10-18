'use strict'

import { Observable, from } from 'rxjs'; // reactiveX JS 구현체 http://reactivex.io/, https://www.learnrxjs.io/ 참고
import ScatterJS from 'scatterjs-core';  // https://github.com/GetScatter/scatter-js
import ScatterEOS from 'scatterjs-plugin-eosjs2';
import { JsonRpc, Api } from 'eosjs';  // https://github.com/EOSIO/eosjs

ScatterJS.plugins(new ScatterEOS());

const APP_NAME = 'TanozGames'; // DApp name for scatter

/* EOS Mainnet 정보 */
const network = ScatterJS.Network.fromJson({
  blockchain: 'eos',
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
  host: 'nodes.get-scatter.com',
  port: 443,
  protocol: 'https'
});

/**
 * EOS를 account로 전송한다.
 * @param {JSON} account Scatter 로그인시 획득한 계정 정보
 * @param {*} amount 전송할 EOS 수량
 */
const transferData = (account, amount) => {
  return {
    actions: [{
      account: 'eosio.token',
      name: 'transfer',
      authorization: [{
        actor: account.name,
        permission: account.authority,
      }],
      data: {
        from: account.name,
        to: 'tazsalesaver',
        quantity: `${amount} EOS`,
        memo: 'Request for Presale : Let\'s Enjoy GuangSicBo Game at https://www.guang.game',
      },
    }]
  }
}

/**
 * 
 * class to commnunicate wit the block chain
 */
export default class Blockchain {
  /**
   * constractor
   */
  constructor() {
    this.rpc = new JsonRpc(network.fullhost());
  }

  /**
   * connect to scatter
   */
  connect() {
    return from(ScatterJS.connect(APP_NAME, {network}));
  }

  /**
   * Login
   */
  login() {
    return new Observable(observer => {
      ScatterJS.login().then(id => {
        if (!id || !id.accounts || !id.accounts.length) {
          return observer.error(new Error('No identity'));
        }
        
        const account = id.accounts.find(element => element.blockchain === 'eos')
        if (!account) {
          return observer.error(new Error('No eos account'));
        }

        observer.next(account);
        observer.complete();
      })
    })
  }

  /**
   * Get user balance
   * 
   * @param { string } account EOS 계정
   */
  getEosBalance(account) {
    return new Observable(observer => {
      this.rpc.get_currency_balance('eosio.token', account, 'EOS')
        .then(bal => {
          observer.next(bal);
          observer.complete();
        })
        .catch(err => {
          observer.error(err);
        })
    })
  }

  /**
   * Get user balance
   * 
   * @param { string } account EOS 계정
   */
  getTazBalance(account) {
    return new Observable(observer => {
      this.rpc.get_currency_balance('taztokenbase', account, 'TAZ')
        .then(bal => {
          observer.next(bal);
          observer.complete();
        })
        .catch(err => {
          observer.error(err);
        })
    })
  }

  /**
   * TAZ 토큰 구매
   * 
   * @param {string} account EOS 계정
   * @param {number} amount 구매에 사용할 EOS 수량
   */
  buy(account, amount) {
    const eos = ScatterJS.eos(network, Api, {
      rpc: this.rpc,
      beta3: true
    });

    return new Observable(observer => {
      eos.transact(transferData(account, amount.toFixed(4)), {
        blocksBehind: 4,
        expireSeconds: 30,
      }).then(res => {
        observer.next(res);
        observer.complete();
      }).catch(error => observer.error(error));
    })
  }
}
