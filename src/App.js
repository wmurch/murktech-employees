import React, { Component } from 'react'
import TopNav from './components/TopNav'
import AddUser from './pages/AddUser'
import ViewUser from './pages/ViewUser'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <header>
          <TopNav />
        </header>
        <main />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="view-user" exact component={ViewUser} />
            <Route path="add-user" exact component={AddUser} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
