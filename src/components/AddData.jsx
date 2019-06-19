import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL =
  'https://sdg-staff-directory-app.herokuapp.com/api/MurkTech/employees'

export default function AddData() {
  const [employee, setEmployee] = useState('')
  const [employeeList, setEmployeeList] = useState('')

  useEffect(() => {
    axios.get(API_URL).then(resp => {
      setEmployee(resp.data)
      console.log({ resp })
    })
  }, [])

  const addEmployee = upload => {
    console.log({ employee })
    axios.post(API_URL).then(resp => {
      setEmployeeList(newList => newList.concat(resp.data))
      setEmployee('')
    })
  }

  return (
    <>
      <div>
        <h1>Employee Info</h1>
        <form onSubmit={addEmployee}>
          <input
            type="text"
            name="firstName"
            value="firstName"
            onChange={upload => {
              setEmployee(upload.target.value)
            }}
          />
          <input
            type="text"
            name="lastName"
            value="lastName"
            onChange={upload => {
              setEmployee(upload.target.value)
            }}
          />
          <input
            type="date"
            name="birthday"
            value="birthday"
            onChange={upload => {
              setEmployee(upload.target.value)
            }}
          />
          <input
            type="date"
            name="hireDate"
            value="hireDate"
            onChange={upload => {
              setEmployee(upload.target.value)
            }}
          />
          <input
            type="checkbox"
            name="isFullTime"
            value="isFullTime"
            onChange={upload => {
              setEmployee(upload.target.value)
            }}
          />
          <input
            type="string"
            name="profileImage"
            value="profileImage"
            onChange={upload => {
              setEmployee(upload.target.value)
            }}
          />
          <input
            type="string"
            name="jobTitle"
            value="jobTitle"
            onChange={upload => {
              setEmployee(upload.target.value)
            }}
          />
        </form>
      </div>
    </>
  )
}
