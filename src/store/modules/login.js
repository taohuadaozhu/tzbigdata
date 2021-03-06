/**
 * Created by lichb on 2017/2/7.
 */
import {LOGIN_IN, LOGIN_OUT,CHANGE_TAG} from '../mutation-types'
import tokens from '../../apis/tokens'

// initial state
const state = {
  tokens: '',
  userid:'',
  nowtag:'dash',
  getMineBaseMsg: {
    errno: 1,
    msg: {}
  }
}

// getters
const getters = {
  tokens: state => state.tokens,
  userid: state => state.userid,
  nowtag: state => state.nowtag
  // ,
  // getMineBaseMsg: state => state.getMineBaseMsg
}

//actions
const actions = {
  login({commit, state}, user){
    return tokens.getTokens(user.name, user.pass).then((data) => {
      //success
      commit(LOGIN_IN, {tokens: data.userName})
      
    }, (error) => {
      //fail
      console.log(error);
      commit(LOGIN_IN, {tokens: 'error'})
    })
  },
  logout({commit}){
    commit(LOGIN_OUT)
  }
//   ,
//   getMineBaseApi({commit}) {
//   alert('进入action');
//   api.mineBaseMsgApi()
//   .then(res => {
//       alert('action中调用封装后的axios成功');
//       console.log('action中调用封装后的axios成功')
//      // commit(types.GET_BASE_API, res)
//   })
// }
}

//mutations
const mutations = {
  [LOGIN_IN] (state, {tokens}) {
    console.log(tokens)
    state.tokens = tokens
  },
  [LOGIN_OUT] (state) {
    state.tokens = ''
  },
  CHANGE_TAG (state,path) {
    state.nowtag = path
  }
  // ,
  // [types.GET_BASE_API](state, res) {
  //   alert('进入mutation');
  //   state.getMineBaseMsg = { ...state.getMineBaseMsg, msg: res.data.msg }
  //   alert('进入mutations修改state成功');
  // }
}

//export
export default {
  state,
  getters,
  actions,
  mutations
}
