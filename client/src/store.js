/**********************************************************************/
/************************** Store******************************/
/********************************************************************/
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";



const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    
  )
);
export default store;

/**********************************************************************/
/************************** Store ******************************/
/********************************************************************/