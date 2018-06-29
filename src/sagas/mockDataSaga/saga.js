import { call, put, takeLatest } from 'redux-saga/effects'

import * as actions from './actions'

let data = [{  
  "NAME":"Norway",
  "TOTAL":39
},
{  
  "NAME":"Germany",
  "TOTAL":31
},
{  
  "NAME":"Canada",
  "TOTAL":29
},
{  
  "NAME":"United States",
  "TOTAL":23
},
{  
  "NAME":"Netherlands",
  "TOTAL":20
}];

function* init() {
  yield put({
    type: actions.SET_STATE,
    payload: {
      data
    }
  })
}

function* update(rowData) {
  data = [...data, rowData.payload]
  yield put({
    type: actions.SET_STATE,
    payload: {
      data
    }
  })
}

export default function* sagas() {
  yield [
    takeLatest(actions.INIT, init),
    takeLatest(actions.UPDATE, update)
  ]
}
