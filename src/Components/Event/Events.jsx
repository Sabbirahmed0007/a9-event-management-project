import React from 'react';
import { Link } from 'react-router-dom';

const Events = ({event}) => {

    const {name, image, price, description,id}=event;

    return (
        <div className=' mx-4 rounded-lg bg-gradient-to-r from-amber-500 to-green-400 text-white font-poppins drop-shadow-lg mt-5' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >
            <img src={image} alt="" className='rounded-t-lg h-80 w-full' />
            <div className=' my-5 px-4'>
                <h1 className='text-2xl font-extrabold uppercase'>{name}</h1>
                <p className='text-left text-lg font-semibold my-2'>Price: {price}</p>
                <p className='text-left h-20'>{description.slice(0, 80)} <span className='underline'>Click on the details button to See more </span>...</p>
                <div className='text-right'>
                    <Link to={`/eventdetails/${id}`}>
                        <button className='btn font-bold btn-md my-4 bg-pink-600 hover:bg-pink-300 hover:text-black border-none text-white'>Details</button>
                    </Link>
                </div>
            </div>
            
        </div>
    );
};

export default Events;