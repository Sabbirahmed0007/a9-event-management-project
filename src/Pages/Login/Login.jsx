import React, { useContext, useState } from 'react';
import { BiSolidShow } from 'react-icons/Bi';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { Result } from 'postcss';
import validator from 'validator';
import swal from 'sweetalert';


const Login = () => {
    const {SignIn}= useContext(AuthContext);
    const [show, setshow]=useState(false);
    const [error, setError]=useState('');
    const [emailError, setEmailError] = useState('')


    const handleLogIN=(e)=>{
        e.preventDefault();
        

        const email= e.target.email.value;
        const password= e.target.password.value;
        console.log(email, password)
        e.target.email.value = '';
        e.target.password.value = '';
        
        if (!validator.isEmail(email)) {
            
            swal("opps!", "Enter a valid Email", "warning");
        }
        setError('');

        // sign in with email and password
        SignIn(email, password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error( error.message);
            // setError("No email account found of this email");
            setError(error.message);
        })
    }

    return (
        <div>
            <div className=' mt-10 py text-center bg-gray-200 shadow-xl w-11/12 lg:w-2/4 mx-auto rounded-lg mb-6'>
                <div className='border-b border-black p-4 pb-5 w-4/5 mx-auto'>
                    <h2 className='text-2xl font-bold'>Login your account</h2>
                </div>
                <form onSubmit={handleLogIN} >
    
                    <div>
                        <input type="email" name="email" id="email" className='my-4 w-80 p-4 outline-none rounded-lg text-sm' placeholder='Enter your email...'/>
                    </div>
                    <p className='text-center'>{emailError}</p>
    
                    <div className='relative'>
                            <input  type={show ? "text" : "password"}name="password" id="password" className='my-4 w-80 p-4 outline-none rounded-lg text-sm' placeholder='Password must be 6 characters or longer' />
                            <p onClick={()=>setshow(!show)} className='absolute right-20 lg:right-40 top-9'>
                                {
                                    show? <BiSolidShow className=' text-xl'></BiSolidShow>:<AiFillEyeInvisible className='text-xl'></AiFillEyeInvisible>
                                }
                            </p>
                        </div>
                        <p>{error}</p>
                    <div>
                        <button className='btn w-80 text-white bg-rose-950 hover:bg-rose-900 my-5'>Log In</button>
                    </div>
                </form>
                <div className='h-14'>
                    <p className=' my-3 '>
                    Don't Have An Account ? <Link className='link' to={'/register'}>Register</Link>
                    </p>
                </div>
                
        
        
            </div>
        </div>
    );
};

export default Login;