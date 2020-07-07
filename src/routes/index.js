import React from "react";
import { Switch } from "react-router";

import { ScrollTopToRoute } from "../components";
import {
  MainPage,
  SearchPage
  // DashboardPage, PostsPage, SinglePostPage
} from "../pages";

const routes = ismobile => {
  return (
    <Switch>
      <ScrollTopToRoute
        exact
        path="/index.html"
        component={MainPage}
        ismobile={ismobile}
      />
      <ScrollTopToRoute
        exact
        path="/"
        component={MainPage}
        ismobile={ismobile}
      />
      <ScrollTopToRoute
        exact
        path="/search/:id"
        component={SearchPage}
        ismobile={ismobile}
      />
      {/** <ScrollTopToRoute
        exact
        path="/dashboard"
        component={DashboardPage}
        ismobile={ismobile}
      />
      <ScrollTopToRoute
        exact
        path="/posts"
        component={PostsPage}
        ismobile={ismobile}
      />
      <ScrollTopToRoute
        exact
        path="/posts/:id"
        component={SinglePostPage}
        ismobile={ismobile}
      />*/}
    </Switch>
  );
};

export default routes;
