import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Player, WidgetBuilder} from '../screens'

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={WidgetBuilder} />
    </Switch>
  )
}

export default MainRoutes;