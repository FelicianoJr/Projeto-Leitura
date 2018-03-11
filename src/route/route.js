import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../containers/App";
import CategoryContainer from "../containers/CategoryContainer";
import CommentFormContainer from "../containers/CommentFormContainer";

import { Provider } from "react-redux";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/category/:category?" component={CategoryContainer} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
