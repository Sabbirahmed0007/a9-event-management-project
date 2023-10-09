import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EventDetails = () => {
    const events= useLoaderData();
    const {id}= useParams();
    const ID= parseInt(id);
    
    const eventdetail= events.find(event=>event.id === ID);

    console.log(events,eventdetail, ID)
    const{image, name,description, duration, capacity, bookingProcess,testimonials, cancellationPolicy, price}= eventdetail;
    
    return (
        <div className='mx-3 bg-blue-600 text-white rounded-lg mt-5'>

            <img src={image} alt="" className='w-full rounded-t-lg' />

            <div className='mx-3 py-3 text-left'>
                <h2 className='text-center font-extrabold text-3xl uppercase my-2'>{name}</h2>
                <p className='mt-3 font-bold'>Price: {price}</p>
                <p className='my-2 font-bold'>Duration time: {duration}</p>
                <p>{description}</p>
                <p className='font-semibold my-2'>Estimate: {capacity}</p>
                <p className='text-green-200 italic font-semibold'>POV: {cancellationPolicy}</p>
                <div className='mt-4'>
                    <details>
                        <summary>Review</summary>
                        <p><span className='text-pink-400 font-bold'>Review-1:</span> {testimonials[0].comment}</p>
                        <p><span className='text-pink-400 font-bold'>Review-2:</span> {testimonials[1].comment}</p>
                    </details>
                </div>

            </div>

        </div>
    );
};

export default EventDetails;