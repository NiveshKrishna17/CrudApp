import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'

export default function Read() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://reqres.in/api/users?pages=2`).then((res) => {
            console.log(res)
            setData(res.data.data);
        })
    }, []);

    return (
        <Fragment>
            <div>Read</div>
            <div className='container'>
                <div className='col-md-12'>
                    <div className='row justify-content-center'>
                        <table>
                            <thead>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Profile</th>
                            </thead>
                            {
                                data && data.map((dat, i) => (
                                    <tbody>
                                        <td>{dat.first_name}</td>
                                        <td>{dat.last_name}</td>
                                        <td>{dat.email}</td>
                                        <td><img src={dat.avatar} alt="avatar"/></td>
                                    </tbody>
                                ))}

                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
