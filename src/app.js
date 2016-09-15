'use strict';

const React = require('react');
const {Component, PropTypes} = React;
const {connect} = require('react-redux');
const actions = require('./lib/actions');
const autoBind = require('react-autobind');
const Parent = require('./components/Parent');

class App extends Component {
  constructor(props) {
      super(props);
      autoBind(this);
  }

  /* object root {
    child: null
  }
  */

  render() {
    return (
      <div>
        <div className='logo-wrapper'><img src='../img/heal_logo_clear.png' /></div>
        <div className='container-area'>
          <Parent children={2} />
        </div>
      </div>
    );
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
