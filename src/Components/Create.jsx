import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify'

const Create = () => {
    const { register, handleSubmit, formState: { errors }, reset, triggers } = useForm();
    const onSubmit = (e) => {
        var obj = {
            "name": e.userName,
            "job": e.jobName
        }
        axios.post(`https://reqres.in/api/users`, obj).then((res) => {
            // if (res.status === 201) {
                toast.success("Created Successfully");
                reset();
            // }else {
            //     toast.error('Something Went Wrong');
            // }
        })


    }
    return (
        <Fragment>
            <div>Create</div>
            <div className='container'>
                <div className='col-md-6'>
                    <div className='row justify-content-center'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='form-control' placeholder=' User Name' type="text" name='userName' 
                            {...register('userName', { required: true })}
                            />
                             {errors.userName && <p>User name is required.</p>}
                            <br />
                            <input className='form-control' placeholder=' Job Name' type="text" name='jobName' 
                            {...register('jobName', { required: true })}
                            />
                             {errors.jobName && <p>Job name is required.</p>}
                             <br />
                             <button className='btn btn-outline-success'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}
export default Create;