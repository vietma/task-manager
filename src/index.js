import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import taskReducer from "./reducers/taskReducer";
import { Provider } from "react-redux";
import { uniqueId } from "./actions";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

console.log("index.js - Redux Store");

const initialState = {
  tasks: [],
  isLoading: false
};

const store = createStore(
  taskReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
