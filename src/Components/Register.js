import React, { useState } from 'react'
// import React from 'react'
import { useNavigate,Link } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();
    const[input,setInput]=useState({
         name:"",
         email:"",
         password:"",
    });

    // localStorage
    const handleSubmit =(e)=>{
        e.preventDefault();
        localStorage.setItem('user',JSON.stringify(input));
        navigate("/login")
    };
  return (
    <>
        <section
        className='vh-100 bg-image'
        style={{
            backgroundImage:"url('https://mbdcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
        }}
        >
            <div className='mask d-flex align-item-center h-100 gradient-custom-3'>
                <div className='container h-100'>
                    <div className='row d-flex justify-content-center align-items-center h-100'>
                        <div className='col-12 col-md-9 col-lg-7 col-xl-6'>
                            <div className='card' style={{borderRadius:"15px"}}>
                                <div className='card-body p-5'>
                                    <h2 className='text-uppercase text-center mb-5'>
                                        Create an account
                                    </h2>
                                    {/* <form onSubmit={handleSubmit} > */}
                                    <form onSubmit={handleSubmit}>
                                        <div className='form-outline mb-4'>
                                            <input 
                                            name='name'
                                         value={input.name}
                                         onChange={(e)=> setInput({
                                            ...input,[e.target.name]:e.target.value,
                                         })}
                                        // onChange={(e)=>
                                        //         setInput({
                                        //             ...input,
                                        //             [e.target.name]: e.target.value,
                                        //     })
                                        // }
                                            type='text'
                                            id='form3example1cg'
                                            className='form-control form-control-lg'
                                             />
                                             <label className='form-label' htmlFor='form3Example1cg'>Your Name</label>
                                        </div>

                                        <div className='form-outline mb-4'>
                                            <input 
                                              name='email'
                                              value={input.email}
                                              onChange={(e)=> setInput({
                                                 ...input,[e.target.name]:e.target.value,
                                              })}
                                            type='email'
                                            id='form3Example3cg'
                                            className='form-control form-control-lg'
                                             />
                                             <label className='form-label' htmlFor='form3Example3cg'>Your Email</label>
                                        </div>

                                        <div className='form-outline mb-4'>
                                            <input 
                                             name='password'
                                             value={input.password}
                                             onChange={(e)=> setInput({
                                                ...input,[e.target.name]:e.target.value,
                                             })}
                                            type='Password'
                                            id='form3Example4cg'
                                            className='form-control form-control-lg'
                                             />
                                             <label className='form-label' htmlFor='form3Example4cg'>Password</label>
                                        </div>
                                        <div className='d-flex justify-content-center'>
                                            <button 
                                                type='submit'
                                                className='btn btn-success btn-block btn-lg gradient-custom-4 text-body text-white'
                                            >
                                                 Register
                                            </button>
                                           
                                        </div>
                                        <p className='text-center text-muted mt-5 mb-0'>
                                            Have already an account?
                                            <Link to="/login" className='fw-bild text-body'>
                                            <u>Login here</u></Link>
                                        </p>
                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    </>
  )
}

export default Register