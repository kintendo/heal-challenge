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

  renderChildren(numOfChildren) {
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
        {this.renderChildren(this.props.children)}
      </div>
    );
  }
}

Parent.propTypes = {
  children: PropTypes.number,
  isHorizontal: PropTypes.bool
};
Parent.defaultProps = {
  chilren: 0,
  isHorizontal: false
};
module.exports = Parent;
