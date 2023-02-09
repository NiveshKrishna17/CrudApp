import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'

export default function Read() {
    const [data, setData]= useState({});

    useEffect(()=>{
        axios.get(`https://reqres.in/api/users/1`).then((res)=>{
            setData(res.data.data);
        })
    }, []);

  return (
    <Fragment>
    <div>Read</div>
        <div className='container'>
            <div className='col-md-12'>
                <div className='row justify-content-center'>
                    <h4>First Name is : {data.first_name}</h4>
                    <h4>Last Name is : {data.last_name}</h4>
                    <h4>Email Address is : {data.email}</h4>
                    <h4>AVATAR is : 
                        <img src={data.avatar} alt="avatar"/>
                         </h4>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
