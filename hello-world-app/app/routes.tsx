// 1st-party
import { AppRouter, Router } from "@ethicdevs/react-monolith";
import { AppRouterGroup } from "@ethicdevs/react-monolith/dist/types";
// 3rd-party
import React from "react";
// app
/* controllers */
import * as HomeController from "./controllers/HomeController";
import * as ThemeController from "./controllers/ThemeController";
/* views */
import HomeView from "./views/HomeView";

const HelloWorldAppRouter: AppRouter = () => (
  <Router.Root>
    <Router.Group type={AppRouterGroup.API}>
      <Router.Route
        method={"GET"}
        path={"/"}
        handler={HomeController.getHomeView}
      />
      <Router.Route
        method={"GET"}
        path={"/theme"}
        handler={ThemeController.getTheme}
      />
      <Router.Route
        method={"POST"}
        path={"/theme"}
        handler={ThemeController.postTheme}
      />
    </Router.Group>
    <Router.Group type={AppRouterGroup.DEFAULT}>
      <Router.Route path="/home-no-ssr-data" view={HomeView} />
    </Router.Group>
  </Router.Root>
);

export default HelloWorldAppRouter;
