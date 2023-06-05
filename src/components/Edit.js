import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Edit() {
const[id,setId]=useState(0);
const[name,setName]=useState('');
const[age,setAge]=useState('');
const[email,setEmail]=useState('');

const navigate = useNavigate();
useEffect(()=>{
setId(localStorage.getItem('id'));
setName(localStorage.getItem('name'));
setAge(localStorage.getItem('age'));
setEmail(localStorage.getItem('email'));

},[])

const handleUpdate=(e)=>{
    e.preventDefault();
    axios.put(`https://6479b3aea455e257fa63978f.mockapi.io/crud/${id}`,{
        e_name:name,
        e_age:age,
        e_email:email

    }).then(()=>{
        navigate('/')
    }).catch((err)=>{
        console.log(err)
    })
}


  return (
    <>
    <div className='row create-box'>
        <div className='col-md-4'>
            <div className='mb-2 mt-2'>
                <Link to='/'>
                <button className='btn btn-outline-info'>Read Data</button>
                </Link>
            </div>
            <div className='bg-success p-4 text-center text-white'>
                <h1>Update Data</h1>
            </div>
            <form onSubmit={handleUpdate}>
                <div className='form-group'>
                    <label>
                        Enter name:
                    </label>
                    <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>
                        Enter Age:
                    </label>
                    <input type='number'value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Age' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>
                        Enter email:
                    </label>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}placeholder='email' className='form-control'/>
                </div>
                <br/>
               <div className='d-grid'>
               <input type='submit' value='Update' className='btn btn-success'/>

               </div>
            </form>
            {/* {name}
            <br/>
            {age}
            <br/>
            {email} */}

        </div>
    </div>
    </>
  )
}

export default Edit
