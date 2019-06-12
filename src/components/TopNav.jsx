import React from 'react'
import { Link } from 'react-router-dom'
/* import AddUser from '../pages/AddUser'
import ViewUser from '../pages/ViewUser' */

export default function TopNav() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-user">Add New User</Link>
        </li>
        <li>
          <Link to="/view-user">Add New User</Link>
        </li>
      </ul>
    </>
  )
}
