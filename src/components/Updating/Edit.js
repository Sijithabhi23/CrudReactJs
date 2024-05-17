import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import Shopping from '../Shopcart/Shopping'
function Edit() {

    var [model,setModel]=useState('');
    var [price,setPrice]=useState('');
    var [id,setId]=useState('');

    let history=useNavigate();
            var index=Shopping.map(function(e){
                return e.id
            }).indexOf(id);
       
            const handleSubmit=(e)=>{
                e.preventDefault();

                let a=Shopping[index]
                a.Model=model;
                a.Price=price;
            history('/');
            }

            useEffect(()=>{
                setModel(localStorage.getItem('Model'))
                setPrice(localStorage.getItem('Price'))
                setId(localStorage.getItem('id'))
            },[])


  return (
    <div className='Edit'>
        <form>
            <label> Model :     
            <input type='text' value={model} placeholder='enter the model'  onChange={(e)=>setModel(e.target.value)}/><br/> 
            </label>
            <label> Price :
            <input type='text' value={price} placeholder='enter the price'  onChange={(e)=>setPrice(e.target.value)}/><br/>
            </label>
            <button onClick={(e)=>handleSubmit(e)} type='submit'>Update</button>
            </form>

    </div>
  )}


export default Edit