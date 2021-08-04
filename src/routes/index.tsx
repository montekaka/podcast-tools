import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Player} from '../screens'

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Player} />
    </Switch>
  )
}

export default MainRoutes;