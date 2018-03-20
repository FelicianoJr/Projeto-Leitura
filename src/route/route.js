import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../containers/App";
import CategoryContainer from "../containers/CategoryContainer";
import { Provider } from "react-redux";
import PostDetailContainer from "../containers/PostDetailContainer";

const route = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/:category" component={CategoryContainer} />
          <Route exact path="/:category/:id" component={PostDetailContainer} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default route;
