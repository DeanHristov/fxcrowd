import {applyMiddleware, compose, createStore as reduxStore} from 'redux'
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger'

import rootReducer from './reducers'
export default (initialState = {}) => {
    const enhancers   = [];
     const middleware = [
         reduxThunk,
         reduxLogger
     ];

    return reduxStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            // ...enhancers
        )
    )

}
