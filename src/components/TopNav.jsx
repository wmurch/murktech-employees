import React from 'react'
import { Link } from 'react-router-dom'
/* import AddUser from '../pages/AddUser'
import ViewUser from '../pages/ViewUser' */

export default function TopNav() {
  return (
    <>
      <div className="NavLinks">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/add-user"> Add User </Link>
          </li>
          <li>
            <Link to="/view-user"> View User </Link>
          </li>
          <li>
            <Link to="/all_employees"> All Employees </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
