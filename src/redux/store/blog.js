import { createStore, applyMiddleware, combineReducers } from "redux"
import reducers from "../reducers/reducers"
import createSagaMiddleware from "redux-saga"
import rootReducer from "../sagas/watchers"


// create saga middleware
const sagaMiddleware = createSagaMiddleware()

// Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware

// mount it on the Store
const store = createStore(
        reducers,
        applyMiddleware(sagaMiddleware)
)

// then run saga after 
sagaMiddleware.run(rootReducer);


//export to use by other relative file
export default store;