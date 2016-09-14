const {createStore, combineReducers, applyMiddleware, compose} = require('redux');
const thunk = require('redux-thunk').default;
const appReducer = require('./reducers/AppReducer');

const AppReducer = combineReducers({
    appData: appReducer,
});

const AppStore = createStore(
    AppReducer,
    compose(
        applyMiddleware(thunk),
        window && window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

module.exports = AppStore;
