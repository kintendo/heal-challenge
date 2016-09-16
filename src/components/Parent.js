'use strict';

const React = require('react');
const {Component, PropTypes} = React;
const autoBind = require('react-autobind');
const Child = require('./Child');

class Parent extends Component {
  constructor(props) {
      super(props);
      autoBind(this);
  }

  renderChildren(nodes) {
    let children = [];
    for(let i = 0; i < numOfChildren; i++) {
      children.push(<Child key={`child-${i}`}/>);
    }
    return children;
  }

  render() {
    const {children, isHorizontal} = this.props;
    return (
      <div className={`parent ${isHorizontal ? 'horizontal' : ''}`}>
      </div>
    );
  }
}

Parent.propTypes = {
  nodes: PropTypes.number,
  isHorizontal: PropTypes.bool
};
Parent.defaultProps = {
  nodes: [],
  isHorizontal: false
};
module.exports = Parent;
