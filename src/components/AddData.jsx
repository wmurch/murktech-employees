import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL =
  'https://sdg-staff-directory-app.herokuapp.com/api/MurkTech/employees'

export default function AddData() {
  const [employee, setEmployee] = useState('')

  useEffect(() => {
    axios.get(API_URL).then(resp => {
      setEmployee(resp.data)
      console.log({ resp })
    })
  }, [])

  return (
    <>
      <main>{/* <form onSubmit={addEmployee} /> */}</main>
    </>
  )
}
