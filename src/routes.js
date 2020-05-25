import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/About" component={About}></Route>
      </Switch>
    </BrowserRouter>
  )
}