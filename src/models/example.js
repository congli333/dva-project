import request from '../utils/request'
export default {

  namespace: 'dva',

  state: {
    scrollList: [],
    eventsList: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const data = yield call(request, 'src/data/scrollList.json')
      yield put({ type: 'scrollList' , data});
    },
    *events({payload}, {call, put}) {
      const list = yield call(request, 'src/data/events.json')
      yield put({type: 'eventsList', list})
    }
  },

  reducers: {
    scrollList(state, action) {
      console.log(state)
      return {
        ...state,
        scrollList: action.data
      }
    },
    eventsList (state, action) {
      return {
        ...state,
        events: action.list
      }
    },
    update_scroll(state, action) {
      let list = state.scrollList
      list.map(v => {
        v.flag = false
      })
      list[action.ind].flag = true
      return {
        ...state,
        scrollList: list
      }
    }
  },

};
