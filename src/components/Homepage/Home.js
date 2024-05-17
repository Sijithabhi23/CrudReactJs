import React from 'react'
import Shopping from '../Shopcart/Shopping'
import '../../index.css'
import { Link,useNavigate } from 'react-router-dom'
function Home() {
        let history=useNavigate();


        const handleUpdate=(id,model,price)=>{
            localStorage.setItem('Model',model);
            localStorage.setItem('Price',price);
            localStorage.setItem('Id',id);
        }
        const handleDelete = (id)=>{
            var index=Shopping.map(function(e){
                return e.id
            }).indexOf(id);
            Shopping.splice(index,1);
            history('/');
        }

    return(
    <div>
        <h1 style={{textAlign:'center'}}>Lets Do Some CRUD Operations </h1>
        <table>
            <thead>
                <tr>
                    <th>
                        model
                    </th>

                    <th>
                        price
                    </th>
                    <th>
                        update
                    </th>
                    <th>
                        remove
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    Shopping &&  Shopping.length > 0
                    ?
                    Shopping.map((item) =>{
                        return(
                            
                            <tr>
                                <td>
                                    {item.Model} 
                                </td>

                                <td>
                                &#8377; {item.Price} 
                                </td>

                                <td>
                                    <Link to={'/edit'}    >
                                    <button onClick={()=>handleUpdate(item.id,item.Model,item.Price)} className='btn1'>Edit</button>
                                    </Link>
                                </td>
                                
                                <td>
                                    <button onClick={()=>handleDelete(item.id)}className='btn2'>Delete</button>
                                </td>
                                
                            </tr>
                        )
                    })
                    :
                    <h2>Theernnu Poch!!<span style={{fontSize:"40px"}}> &#128540;&#128540;&#128540;</span></h2>            }
            </tbody>
        </table>
        <br/>
        <br/>
        <h3 className='btn-create'>Do you want to add something ?</h3>
        <Link style={{textDecoration:'none' }} to='/create'>
           <img className='create-icon' src='../../../create.png'></img> 
        </Link>
    </div>
)}

export default Home