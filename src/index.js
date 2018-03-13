import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reducer from "./reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import registerServiceWorker from "./registerServiceWorker";
import Root from "./route/route";
import "bootstrap/dist/css/bootstrap.css";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

registerServiceWorker();
