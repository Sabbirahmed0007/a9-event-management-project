import React from 'react';

const Faqdetails = ({query}) => {
    const {question, answer}=query;
    return (
        <div className='text-left mt-5'>

            <details className='mx-5'>
                <summary className='text-lg font-semibold'>{question}</summary>
                <p className='bg-slate-100 drop-shadow-lg p-3 text-sky-600'>{answer}</p>
            </details>
            
        </div>
    );
};

export default Faqdetails;