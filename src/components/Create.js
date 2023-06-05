import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';


function Create(){
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [email,setEmail]=useState('');

    const navigate = useNavigate();

const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('https://6479b3aea455e257fa63978f.mockapi.io/crud',{
        e_name:name,
        e_age:age,
        e_email:email
    }).then(()=>{
        navigate('/');
    }).catch((err)=>{
        console.log(err)
    })
}

    return(
        <>
        <div className='row create-box'>
            <div className='col-md-4'>
                <div className='mb-2 mt-2'>
                    <Link to='/'>
                    <button className='btn btn-outline-info'>Read Data</button>
                    </Link>
                </div>
                <div className='bg-success p-4 text-center text-white'>
                    <h1>Create Data</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>
                            Enter name:
                        </label>
                        <input type='text' placeholder='Name' className='form-control' onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label>
                            Enter Age:
                        </label>
                        <input type='number' placeholder='Age' className='form-control' onChange={(e)=>setAge(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label>
                            Enter email:
                        </label>
                        <input type='email' placeholder='email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <br/>
                   <div className='d-grid'>
                   <input type='submit' value='Submit' className='btn btn-success'/>

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
export default Create;