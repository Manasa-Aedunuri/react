import { useState } from 'react'
// import Student from './Student' importing the function
// import List from './List'
// import Input from './Input'
// import Carlist from './Carlist'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navigation from './components/Navigation'

function App() {
  const [studentName, setStudentName] = useState('Prabhas') // creating a variable
  const [age, setAge] = useState(23)
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>









      {/* <Carlist/> */}
      {/* <List/>
      <Input/> */}
      {/* <p>Hello World</p>
      <p>Name is {studentName} and his age is {age}</p>
      <Student name="Manasa" rollno="505" /> 
      <Student name="Sravani" rollno="506" />
      <Student name="Goldi" rollno="507" />
      <Student name="Shivani" rollno="424" /> */}
    </div>
  )
}
export default App