import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './containers/Home'
import Navbar from './containers/Navbar'
import Todo from './containers/Todo'
// import COMPONENT from 'FILEPATH'

const App = () => (
  <div>
    <BrowserRouter basename = "/personalassistant">
      <Navbar />
      <Switch>
        <Route path = "/Todo">
          <Home />
        </Route>
        <Route path = "/urgent">
          
        </Route>
        <Route path = "/">
          <Todo />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
)

export default App