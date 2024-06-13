import React, { useState } from 'react'

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  function submit() {
    console.log(username, password)
    setUsername('')
    setPassword('')
  }
  return (
    <div>
      <h1>This is Home</h1>
      <p>
        <input value={username} placeholder="Enter name" onChange={(e) => setUsername(e.target.value)} />
      </p>
      <p>
        <input value={password} type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
      </p>
      <button onClick={submit} >Submit</button>
    </div>
  )
}
