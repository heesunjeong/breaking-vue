import Vue from 'vue'
import Vuex from 'vuex'
import Types from './types'
import _ from 'lodash'

Vue.use(Vuex)

const store = new Vuex.Store(
  {
    state: {
      searchCondition: {searchWord: '', location: ''},
      searchResult: {}

    },
    mutations: {
      [Types.SEARCH_TASTYLOAD]: (state, payload) => {
        state.searchCondition = payload;
      },
      [Types.SEARCH_RESULT]: (state, payload) => {
        state.searchResult = payload.documents;
      }
    }
  });

export default store;
