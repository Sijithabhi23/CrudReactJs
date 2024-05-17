import React from 'react'
import { useState } from 'react'
import { v4 as uuid} from 'uuid';
import {useNavigate} from 'react-router-dom'
import Shopping from '../Shopcart/Shopping'
function Add() {

    const [model,setModel]=useState('');
    const [price,setPrice]=useState('');
    let history=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const ids=uuid();    
    let uniqueid=ids.slice(0,8);
    let a =model
    let b=price
    Shopping.push({id:uniqueid, Model:a, Price:b});
    history('/');
    }

  return (
    <div className='Add'>
        <form className='form-data'>
            <label> Model :     
            <input type='text' placeholder='enter the model' onChange={(e)=>setModel(e.target.value)}/><br/> 
            </label>
            <label> Price :
            <input type='text' placeholder='enter the price' onChange={(e)=>setPrice(e.target.value)}/><br/>
            </label>
            <button onClick={(e)=>handleSubmit(e)} type='submit'>Submit</button>
            </form>

    </div>
  )
}

export default Add