import Vue from 'vue'
import Vuex from 'vuex'
import Types from './types'
import _ from 'lodash'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {

      },
  mutations: {
      [Types.SEARCH_TASTYLOAD]: (state, payload) => {
        console.log(state, payload)
      }
    }
  });

export default store;
