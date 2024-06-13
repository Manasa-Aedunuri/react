import React, {useState} from 'react'

export default function Input() {
    const [username,setUsername]=useState('')
    const [age,setAge]=useState('')

    function handleUserName(e){
        setUsername(e.target.value)
    }
    // function handleAge(e){
    //     setAge(e.target.value)
    // }
    function submit(){
        console.log(username,age)
    }
  return (
    <div>
      <p>
        <input placeholder='Enter name' onChange={handleUserName} />
        <input 
            placeholder='Enter age' 
            onChange={(e)=>setAge(e.target.value)} />
        <button onClick={submit}>Submit</button>
      </p>
      
    </div>
  )
}
