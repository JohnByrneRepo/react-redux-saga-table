/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

const styles = {
  title: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

class SimpleDialog extends React.Component {
  state = {
    country: '',
    total: ''
  };

  handleCountryChange = (e) => {
    this.setState({
      country: e.target.value
    });
  };

  handleTotalChange = (e) => {
    this.setState({
      total: e.target.value
    });
  };

  handleClose = () => {
    this.props.onClose(this.state.country, this.state.total);
  };

  handleListItemClick = value => {
    this.props.onClose(this.state.country, this.state.total);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Add new country</DialogTitle>
        <div>
          <List>
            <ListItem>
              <TextField
                value={this.state.country}
                onChange={this.handleCountryChange.bind(this)}
                required
                id="required"
                label="Country"
                defaultValue=""
                className={classes.textField}
                margin="normal"
              />
              <TextField
                value={this.state.total}
                onChange={this.handleTotalChange.bind(this)}
                required
                id="required"
                label="Total"
                defaultValue=""
                className={classes.textField}
                margin="normal"
              />
            </ListItem>
            <ListItem button onClick={() => this.handleListItemClick()}>
              <AddIcon />
              <ListItemText primary="add row" />
            </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

class AddRowDialog extends React.Component {
  constructor(props) {
    super(props);
    this.simpleDialogWrapped = React.createRef();
  }

  state = {
    open: false,
    country: '',
    total: ''
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = (country, total) => {
    this.setState({ open: false });
    this.props.addRow(country, total);
  };

  render() {
    return (
      <div>
        <Button className="button" onClick={this.handleClickOpen}>Add row</Button>
        <SimpleDialogWrapped
          ref={this.simpleDialogWrapped}
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default AddRowDialog;
