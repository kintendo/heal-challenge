'use strict';

// app reducer

function setStatus(status) {
    return {type: 'SET_STATUS', status};
}

module.exports = {
  setStatus
};
