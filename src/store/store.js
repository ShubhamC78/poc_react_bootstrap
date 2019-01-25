import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers/rootReducer';

export default function configureStore() {
    console.log("inside store");
 return createStore(
  rootReducer,
 );
}