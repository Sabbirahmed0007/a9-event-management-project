import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Events from '../../Components/Event/Events';
import Banner from '../../Components/Banner/Banner';

const Home = () => {
    const events= useLoaderData([]);
    // console.log(events);
    return (
        <div>
            <div>
                <Banner></Banner>
                {/* {
                    events.map(eventBanner=><Banner banner={eventBanner} key={eventBanner.id}></Banner>)
                } */}
            </div>
            <h2 className='text-3xl font-extrabold my-5 font-poppins bg-gradient-to-r from-orange-600 to-green-400 text-transparent bg-clip-text'>Our Services</h2>
            <p className='mb-9 font-bold'>We provide you the Best service</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
                {
                    events.map(event=><Events event={event} key={event.id}></Events>)
                }
            </div>

        </div>
    );
};

export default Home;