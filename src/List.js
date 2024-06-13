import React, {useState} from 'react'
import './List.css'
export default function List() {
    const [employees,setEmployees]=useState([
        {
            name:"Vamshi",
            age:21,
            id:505,
            gender:"male"
        },
        {
          name:"Sravani",
          age:23,
          id:506,
          gender:"female"
        },
        {
            name:"Aravind",
            age:21,
            id:511,
            gender:"male"
        },
        {
          name:"Ashiwitha",
          age:22,
          id:543,
          gender:"female"
        }
      ])
  return (
    <div className="employee-container">
      {
        employees.map((emp)=>(
          <div className="employee" key={emp.id}>
            <p>Name : {emp.name}</p>
            <p>Age : {emp.age}</p>
            <p>Gender : {emp.gender}</p>
            <p>ID : {emp.id}</p>
          </div>
        ))
      }
    </div>
  )
}
