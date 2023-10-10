import React, { useEffect, useState } from 'react';
import TeamMembers from './TeamMembers';

const Team = () => {
    const[members, setMembers]=useState([]);

    useEffect(()=>{
        fetch('team.json')
        .then(res=> res.json())
        .then(data=>setMembers(data.team));
    },[])
    return (
        <div className='my-9' >
            <h2 className='mt-16 font-bold text-3xl mb-3'>Meet to our Team</h2>
            <p className='font-semibold text-lg'>Passionate in terms of the Job</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-2'>
                {
                    members.map(member=><TeamMembers member={member} key={member.id}></TeamMembers>)
                }

            </div>
        </div>
    );
};

export default Team;