const assign = require('object-assign');
const initialState = {
  status: ''
};

function appReducer (state = initialState, action = {}) {
  switch (action.type) {
  case 'SET_STATUS':
    return assign({}, state, {
        status: action.status
    });
  default:
    return state;
  }
}

module.exports = appReducer;
