import React from 'react'
import { Switch, Route } from "react-router-dom"
import Home from "../../Pages/Home"
import Signin from "../../Pages/Signin"
import Singup from "../../Pages/Singup"
import NotFoundPage from "../../Pages/NotFoundPage"
import PublicRoute from '../PublicRoute'
import PrivateRoute from '../PrivateRoute'
import Projects from '../../Pages/Projects'

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <PublicRoute exact path="/signin" component={Signin} />
        <PublicRoute exact path="/singup" component={Singup} />
        <PrivateRoute exact path="/projetcs" component={Projects} />

        <Route exact path="*" component={NotFoundPage} />
      </Switch>
    </div>
  )
}

