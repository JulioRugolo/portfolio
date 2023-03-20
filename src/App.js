import './App.css'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Experience from './Pages/Experience'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'

function App () {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/experience"
          component={Experience}
        />
         <Route
          exact
          path="/projects"
          component={Projects}
        />
          <Route
          exact
          path="/contact"
          component={Contact}
        />
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App
