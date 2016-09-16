'use strict';

// app reducer

function setStatus(status) {
    return {type: 'SET_STATUS', status};
}

function addContainer(target) {
  return {type: 'ADD_CONTAINER', target};
}

function changeOrientation(target) {
  return {type: 'CHANGE_ORIENTATION', target};
}

function setSelectedIndex(selectedIndex) {
  return {type: 'SET_SELECTED_INDEX', selectedIndex};
}

module.exports = {
  setStatus, addContainer, changeOrientation, setSelectedIndex
};
