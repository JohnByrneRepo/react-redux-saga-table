import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Router>
      </div>
    )
  }
}
