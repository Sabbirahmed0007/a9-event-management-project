import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Photo from './Photo/Photo';

const Gallery = ({event}) => {
    // const{image}=event;
    // console.log(image)
    const gallery= useLoaderData();
    console.log(gallery)
    
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
            {
                gallery.map(picture=><Photo picture={picture} key={picture.id}></Photo>)
            }
        </div>
    );
};

export default Gallery;