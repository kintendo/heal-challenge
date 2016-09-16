'use strict';

const React = require('react');
const {Component, PropTypes} = React;
const {connect} = require('react-redux');
const actions = require('./lib/actions');
const autoBind = require('react-autobind');
const Child = require('./components/Child');

class App extends Component {
  constructor(props) {
      super(props);
      autoBind(this);
  }

  buildContainer(container) {
    const {containers, selectedIndex} = this.props;
    if (container && container.type === 'child') {
      return (
        <Child key={`child-${container.id}`} className={`${container.id === selectedIndex ? 'selected' : ''}`}/>
      );
    }
    else if (container && container.type === 'parent') {
      return (
        <div key={`parent-${container.id}`} className={`parent ${container.isHorizontal ? 'horizontal' : ''} ${container.id === selectedIndex ? 'selected' : ''}`}>
          {container.children.map( (child) => {
            if (containers[child]) return this.buildContainer(containers[child]);
          })}
        </div>
      );
    }
  }

  render() {
    const {containers, selectedIndex, setSelectedIndex, addContainer, changeOrientation} = this.props;

    const root = this.props.containers[0];
    return (
      <div>
        <div className='logo-wrapper'><img src='../img/heal_logo_clear.png' /></div>
        <div className='container-area'>
          {this.buildContainer(root)}
        </div>
        <div>
          <div className='button-group'>
            <button onClick={setSelectedIndex.bind(null, selectedIndex-1)}>Previous</button>
            <button onClick={setSelectedIndex.bind(null, selectedIndex+1)}>Next</button>
          </div>
          <div className='button-group'>
            <button onClick={addContainer.bind(null, selectedIndex)}>Add Container</button>
            <button onClick={changeOrientation.bind(null, selectedIndex)}>Change Orientation</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    containers: state.appData.containers,
    selectedIndex: state.appData.selectedIndex
  };
}
App.propTypes = {
  status: PropTypes.string,
  setStatus: PropTypes.func,
  setSelectedIndex: PropTypes.func,
  addContainer: PropTypes.func,
  changeOrientation: PropTypes.func
};
module.exports = connect(mapStateToProps, actions)(App);
