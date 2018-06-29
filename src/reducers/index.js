import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as mockDataSaga } from '../sagas/mockDataSaga/reducer'

const reducers = combineReducers({
  mockDataSaga,
  form: formReducer
})

export default reducers
