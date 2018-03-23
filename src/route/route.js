import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../containers/App";
import CategoryContainer from "../containers/CategoryContainer";
import PostDetailContainer from "../containers/PostDetailContainer";
import PageNotFound from "../components/PageNotFound";

const route = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/PageNotFound" component={PageNotFound} />
          <Route exact path="/" component={App} />
          <Route exact path="/:category" component={CategoryContainer} />
          <Route path="/:category/:id" component={PostDetailContainer} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default route;
