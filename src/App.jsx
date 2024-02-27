import { useState } from 'react';
import './App.css'
import './bootstrap.min.css'
import Form from 'react-bootstrap/Form';
function App() {
const [login,setlogin]=useState({
  username:"",password:""
})
 const handlelogin = ()=>{
  const {username,password}=login
   if(username && password ){
       alert("login successfully")
   }else{
alert("pleas fill the form")
   }
 }
console.log(login);
  return (
    <>
    <div className='d-flex justify-content-center align-items-center mt-5 border p-5'>
    <Form>
    <h1 className='text-center'>hello</h1>

      <Form.Group className="mb-3" controlId="formGroupEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={(e)=>setlogin({...login,username:e.target.value})} placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setlogin({...login,password:e.target.value})} />
      </Form.Group>
      <button className='btn btn-success ' onClick={handlelogin}>click</button>

    </Form>

    </div>
    </>
  )
}

export default App
