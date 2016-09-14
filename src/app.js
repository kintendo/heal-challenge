'use strict';

const React = require('react');
const {Component, PropTypes} = React;
const {connect} = require('react-redux');
const actions = require('./lib/actions');
const autoBind = require('react-autobind');

class App extends Component {
  constructor(props) {
      super(props);
      autoBind(this);
  }

  render() {
    <div>Hello, world!</div>
  }
}

function mapStateToProps(state) {
  return {
    status: state.appData.status
  };
}
App.propTypes = {
  status: PropTypes.string,
  setStatus: PropTypes.func
};
module.exports = connect(mapStateToProps, actions)(App);
