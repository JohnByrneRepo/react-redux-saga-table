import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as olympicsDataSaga } from '../sagas/olympicsDataSaga/reducer'

const reducers = combineReducers({
  olympicsDataSaga,
  form: formReducer
})

export default reducers
