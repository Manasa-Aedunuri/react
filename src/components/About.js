import React, { useState } from 'react'

export default function About() {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  function handleUser(e) {
    const { name, value } = e.target
    //console.log(name,value)
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }))
  }
  // const handleUser=()=>{} This method is aslo used to write the function in react.js

  function submit() {
    console.log(newUser)
    setNewUser({ name: '', email: '', password: '' })
  }
  return (
    <div>
      <h1>This is About</h1>
      <p>
        <input
          placeholder="Enter name"
          name='name'
          value={newUser.name}
          onChange={handleUser} />
      </p>
      <p>
        <input
          placeholder='Enter email'
          type='email'
          name='email'
          value={newUser.email}
          onChange={handleUser} />
      </p>
      <p>
        <input
          placeholder='Enter password'
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleUser} />
      </p>
      <button onClick={submit}>Submit</button>
    </div>
  )
}
