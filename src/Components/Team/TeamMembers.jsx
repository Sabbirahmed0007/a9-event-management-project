import React from 'react';

const TeamMembers = ({member}) => {
    console.log(member);
    const {pic, name, bio, experiences, }=member;
    return (
        <div>

            <div className='mx-3 mt-4 bg-slate-200 drop-shadow-xl rounded-lg' data-aos="flip-left">
                <img src={pic} alt="" className='w-full h-72 rounded-t-lg' />
                <div className='mx-3 p-4'>
                    <h1 className='text-xl font-bold my-2'>{name}</h1>
                    <h2 className='font-semibold text-lg'>{bio}</h2>
                    <p className=''>{experiences}</p>
                </div>
            </div>
            
        </div>
    );
};

export default TeamMembers;