import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AddUser from '../pages/AddUser'
import ViewUser from '../pages/ViewUser'

export default function TopNav() {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="add-user">Add New User</Link>
            </li>
            <li>
              <Link to="view-user">Add New User</Link>
            </li>
          </ul>
        </div>
        <Route exact path="/" />
        <Route path="add-user" component={AddUser} />
        <Route path="view-user" component={ViewUser} />
      </Router>
    </>
  )
}
