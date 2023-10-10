import React, { useEffect, useState } from 'react';
import Faqdetails from './Faqdetails';

const FAQ = () => {
    const [faqs, setFaqs]=useState([]);

    useEffect(()=>{
        fetch(`faq.json`)
        .then(res=>res.json())
        .then(data=>setFaqs(data))
    },[])

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl font-bold border-b border-black pb-3'>FAQs</h1>
            <div className=' '>
                {
                    faqs.map(query=><Faqdetails query={query} key={query.id}></Faqdetails>)
                }

            </div>
        </div>
    );
};

export default FAQ;