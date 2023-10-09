import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Events from '../../Components/Event/Events';

const Home = () => {
    const events= useLoaderData();
    console.log(events);
    return (
        <div>
            <h2 className='text-3xl font-extrabold my-2 font-poppins bg-gradient-to-r from-orange-600 to-green-400 text-transparent bg-clip-text'>Our Services</h2>
            <p className='mb-9 font-bold'>We provide you the Best service</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 '>
                {
                    events.map(event=><Events event={event} key={event.id}></Events>)
                }
            </div>

        </div>
    );
};

export default Home;