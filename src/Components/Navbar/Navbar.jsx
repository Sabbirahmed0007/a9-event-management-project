import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import swal from 'sweetalert';

const Navbar = () => {

    const {logOut, user}= useContext(AuthContext);

    const navLink=<>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-8 '>
            <NavLink className="focus:text-red-600 font-bold" to={'/'}>Home</NavLink>
            <NavLink className="focus:text-red-600 font-bold" to={'/service'}>Service</NavLink>
            <NavLink className="focus:text-red-600 font-bold" to={'/register'}>Register</NavLink>

        </div>

    </>

    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            console.log('You logged out successfully');
            swal("Good job!", "You Logged out successfully!", "success");
        })
        .catch(error=>{
            console.error("Error", error.massage);
        })
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-44">
                        {navLink}
                    </ul>
                </div>
                <h3 className="font-bold normal-case text-xl lg:mx-4 lg:text-2xl">DreamyDaysPlanner</h3>
                </div>
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {navLink}
                </ul>
                </div>
                <div className="navbar-end list-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        {
                            user?<div className="w-10 rounded-full"><img src={user && user.photoURL} /></div>: " "
                        }
                        
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60 overflow-auto">
                    <li>
                        <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a href="https://www.sabbirahmed3071@gmail.com">{user&& user.email}</a></li>
                    <li><a>Settings</a></li>
                    
                    </ul>
                </div>
                {
                    user? <Link onClick={handleLogOut} className='btn  font-bold btn-sm' to={'/'}>Log Out</Link>
                    :
                    <li><Link className='btn  font-bold btn-sm' to={'/login'}>Log In</Link></li>

                }
                
                </div>
            </div>
        </div>
    );
};

export default Navbar;