import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// const USER_READ_API_URL='http://localhost:8080/getAllUsers';
// const USER_DELETE_URL='http://localhost:8080/deleteById'

 function Read(){

    const[apiData,setApiData]=useState([]);

function getData(){
    axios.get('https://6479b3aea455e257fa63978f.mockapi.io/crud').then((response)=>{
        // axios.get(USER_READ_API_URL).then((response)=>{
        setApiData(response.data)

    })
}

function handleDelete(id){
    axios.delete(`https://6479b3aea455e257fa63978f.mockapi.io/crud/${id}`).then(()=>{
        getData();
    }).catch((err)=>{
        console.log(err)
    })
}

function setDataToStorage(id,name,age,email){
    localStorage.setItem('id',id);
    localStorage.setItem('name',name);
    localStorage.setItem('age',age);
    localStorage.setItem('email',email);

}

useEffect(()=>{
    getData();
},[])



return(
    <>
    <div className='row'>
        <div className='col-md-12'>
            <div className='mb-2 mt-2'>
           <Link to='/create'>
           <button className='btn btn-outline-dark'>Create New Data</button>
           </Link>
            </div>
            <table className='table table-bordered table-striped table-success table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>EMAIL</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                    <td>1</td>
                    <td>karishma</td>
                    <td>4</td>
                    <td>kari@gmail.com</td>
                    <td>EDIT</td>
                    <td>DELETE</td>
                    </tr> */}
                
                        {apiData.map((item)=>{
                            return(
                                <>
                                <tr>
                                <td>{item.id}</td>
                                 <td>{item.e_name}</td>
                                <td>{item.e_age}</td>
                             <td>{item.e_email}</td>
                              <td>
                               <Link to='/edit'>
                               <button className='btn btn-outline-success' onClick={()=>setDataToStorage(item.id,item.e_name,item.e_age,item.e_email)}>Edit</button>
                               </Link>
                              </td>
                              <td>
                              <button className='btn btn-outline-danger' onClick={()=>{if(window.confirm('are you sure to delete te data?')) {handleDelete(item.id)} } }>Delete</button>
                              </td>

                                </tr>
                                </>
                            )

                        })}
                    
                   
                   
                </tbody>
            </table>
        </div>
    </div>
    </>
)
 }
 export default Read;