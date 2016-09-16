const React = require('react');

function Child ({className}) {
  return (
    <div className={`child ${className || ''}`}>
    </div>
  );
}
module.exports = Child;
