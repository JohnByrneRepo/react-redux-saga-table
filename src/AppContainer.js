import { connect } from 'react-redux'

import AppComponent from './App'

import { init } from './sagas/mockDataSaga/reducer'

const mapStatetoProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    init: () => {
      dispatch(init())
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(AppComponent)
