const assign = require('object-assign');
const initialState = {
  containers: {0: {id: 0, type: 'child'}},
  index: 1,
  selectedIndex: 0,
  rootIndex: 0
};

function appReducer (state = initialState, action = {}) {
  switch (action.type) {
  case 'ADD_CONTAINER':
    const target = state.containers[action.target] || {};
    if (target && target.type === 'child') {
      return assign({}, state, {
        index: state.index + 2,
        containers: assign({}, state.containers, {
          [state.index]: {id: state.index, type: 'child', children: []},
          [state.index+1]: assign({}, target, {id: state.index+1}),
          [action.target]: assign({}, target, {type: 'parent', children: [state.index, state.index+1]})
        })
      });
    }
    else if (target && target.type === 'parent') {
      const children = target.children || [];
      return assign({}, state, {
        index: state.index + 1,
        containers: assign({}, state.containers, {
          [state.index]: {id: state.index, type: 'child', children: [], isHorizontal: action.isHorizontal},
          [action.target]: assign({}, target, {children: [...children, state.index], isHorizontal: action.isHorizontal})
        })
      });
    }
  case 'CHANGE_ORIENTATION':
    const flipTarget = state.containers[action.target] || null;
    if (flipTarget) {
      return assign({}, state, {
        containers: assign({}, state.containers, {
          [action.target]: assign({}, flipTarget, {isHorizontal: !flipTarget.isHorizontal})
        })
      });
    } else {
      return state;
    }
  case 'RESET_CONTAINERS':
    return assign({}, state, {
      index: 1,
      containers: {}
    });
  case 'SET_SELECTED_INDEX':
    if (state.containers[action.selectedIndex]) {
      return assign({}, state, {
        selectedIndex: action.selectedIndex
      });
    } else {
      return state;
    }
  default:
    return state;
  }
}

module.exports = appReducer;
