import React, { useContext } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { Result } from 'postcss';

const Login = () => {
    const {SignIn}= useContext(AuthContext);

    const handleLogIN=(e)=>{
        e.preventDefault();

        const email= e.target.email.value;
        const password= e.target.password.value;
        console.log(email, password)

        // sign in with email and password
        SignIn(email, password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error("Error", error.message);
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
    
                    <div>
                    <input type="password" name="password" id="password" className='my-4 w-80 p-4 outline-none rounded-lg text-sm' placeholder='Password must be 6 character or above'/>
                    </div>
                    <p className='text-center'></p>
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