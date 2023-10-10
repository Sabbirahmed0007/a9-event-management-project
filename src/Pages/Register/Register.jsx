import React, { useContext } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Register = () => {
    const {googleSignIn, githubSignIn, createUser}=useContext(AuthContext);

    const handleRegister=(e)=>{
        e.preventDefault();
        const name= e.target.name.value;
        const email= e.target.email.value;
        const password= e.target.password.value;
        const terms= e.target.terms.checked;
        console.log(name, email, password, terms);

        // createUser with email and password
        createUser(email, password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error('Error', error.message);
        })
        

    }

    const handleSignInByGoogle=()=>{

        googleSignIn()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error("Error", error);
        })

    }

    const handleGithubSignIn=()=>{
        githubSignIn()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error("Error", error);
        })
    }

    return (
        <div>
            <div>
                <div className=' mt-10 py text-center  bg-gray-200 shadow-xl w-11/12 lg:w-2/4 mx-auto rounded-lg mb-10'>
                    <div className='border-b border-black p-4 pb-5 w-4/5 mx-auto'>
                        <h2 className='text-xl font-bold'>Register your account</h2>
                    </div>
                    <form onSubmit={handleRegister}> 
                        <div>
                            <input  type="text" name="name" id="name" className='my-4 w-80 p-4 outline-none rounded-lg text-sm' placeholder='Your Name ...' />
                        </div>
                        
                        <div>
                            <input  type="email" name="email" id="email" className='my-4 w-80 p-4 outline-none rounded-lg text-sm' placeholder='Enter your email...' />
                        </div>
                        <div>
                            <input  type="password" name="password" id="password" className='my-4 w-80 p-4 outline-none rounded-lg text-sm' placeholder='Password must be 6 characters or longer' />
                        </div>
                        <div className='text-sm text-left w-80 mx-auto'>
                            <input type="checkbox" name="terms" id="terms" /> {/* Added an id for 'for' attribute */}
                            <label htmlFor="terms">Accept <a className='link' href="/">Terms & Conditions</a></label>
                        </div>
                        <div>
                            <button className='btn w-80 text-white bg-rose-950 hover:bg-rose-900 my-5 font-bold'>Sign Up</button>
        
                        </div>
                        {/* <p>{error}</p> */}
                    </form>
                    <div className='h-14'>
                        <p className=' my-3 '>
                            Already Have An Account ? <Link className='link' to={'/login'}>Login</Link>
                        </p>
                    </div>
                    <div className='px-4 py-3  font-bold w-full border  rounded-xl'>
                        <h2 className="text-3xl text-center">Login With</h2>
                        <div className='text-center flex flex-col gap-2 my-4 lg:gap-1 items-center justify-center '>
                            <button onClick={handleSignInByGoogle}  className='btn btn-outline my-2 font-bold'>
                                <FaGoogle className='text-xl'></FaGoogle>
                                Log in with Google
                            </button>
                            <button onClick={handleGithubSignIn} className='btn btn-outline my-2 font-bold'>
                                <FaGithub className='text-xl '></FaGithub>
                                Log in with GitHub
                            </button>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;