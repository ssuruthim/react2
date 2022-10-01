
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {login} from "./userslice";
import './login.css'
const Login = () => {
    const[Name ,setName]= useState("");
    const[Email,setEmail]= useState(" ");
    const[Password ,setPassword]= useState(" ");
    const dispatch = useDispatch();

const handlerSubmit = (e) =>{
    e.preventDefault();
    dispatch(
        login({
Name:Name,
Email:Email,
Password:Password,
isLogin:true
    }));
}; 
  return (
    <div className='login-head'>
    <div className='login'>
        
        <div className='loginwrapper'>
            <h1>login here</h1>
        <form  className='loginform' onSubmit={(e)=> handlerSubmit(e)}>
            <input type= "name" placeholder='username' 
            ></input>
            <input type= "email" placeholder='email'  ></input>
            <input type= "password" placeholder='password' onchange={(e)=>
            setPassword(e.target.value)}></input>
            <button type='submit' className='buttonname'>submit</button>
        </form>
    </div>
    </div>
    </div>
  )
}

export default Login
