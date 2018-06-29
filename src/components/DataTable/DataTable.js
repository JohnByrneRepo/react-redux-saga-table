import React from 'react'
import PropTypes from 'prop-types'

import AddRowDialog from '../Dialog/AddRowDialog'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import SendIcon from '@material-ui/icons/Send'
import StarBorder from '@material-ui/icons/StarBorder'

export default class DataTable extends React.Component {
  static propTypes = {
    mockDataSaga: PropTypes.object
  }

  createTable(data) {

    return [].concat(data)
      .sort((a, b) => parseInt(a.TOTAL) < parseInt(b.TOTAL))
      .map((row, i) =>
        <ListItem key={i} className="row">
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText inset className="col">{row.NAME}</ListItemText>
          <ListItemText inset className="col">{row.TOTAL}</ListItemText>
        </ListItem>
      );
  }

  addRow(country, total) {
    this.props.addRow({ NAME: country, TOTAL: total })
  }

  render() {
    const { data } = this.props.mockDataSaga
    console.log(data)

    return (
      <div className="table">
        <div className="title">Data Table</div>
        <List className="list">
          {this.createTable(data)}
        </List>
        <AddRowDialog addRow={this.addRow.bind(this)}/>
      </div>
    )
  }
}
