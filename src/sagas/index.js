import { all, fork } from 'redux-saga/effects'

import mockcDataSaga from './mockcDataSaga/saga'

export default function* root() {
  yield all([fork(mockcDataSaga)])
}
