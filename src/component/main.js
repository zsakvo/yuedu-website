import React from "react";
import { Switch, Route } from "react-router-dom";
import Editor from "./edit";
import Home from "./home";
import SourceRule from "./sourceRule";

import ScrollToTop from "./scrollToTop";

const Main = () => (
  <main>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rule" component={SourceRule} />
        <Route path="/editor" component={Editor} />
      </Switch>
    </ScrollToTop>
  </main>
);

export default Main;
