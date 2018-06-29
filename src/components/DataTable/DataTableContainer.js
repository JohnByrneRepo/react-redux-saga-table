import { connect } from 'react-redux'

import DataTable from './DataTable'

import { update } from '../../sagas/mockDataSaga/reducer'

const mapStatetoProps = state => {
  return {
    mockDataSaga: state.mockDataSaga
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRow: (rowData) => {
      dispatch(update(rowData))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(DataTable)
