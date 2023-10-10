import React from 'react';

const Photo = ({picture}) => {
    console.log(picture);
    return (
        <div className='mx-4'>
            <div className='mt-3' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >

            <img src={picture.image} alt="" className='rounded-md h-72 w-full'/>
            </div>
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >
                <img src={picture.banner} alt="" className='my-3 rounded-md h-72 w-full'/>
            </div>

            
        </div>
    );
};

export default Photo;