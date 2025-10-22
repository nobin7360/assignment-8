import React from 'react';
import oop from '../../assets/App-Error.png';
import { useNavigate } from 'react-router';
const ErroAppMsg = () => {
    const navigate=useNavigate();
    return (
        <div className='hero mt-6 flex flex-col items-center'>
            <div><img src={oop} alt="" /></div>
            <div className='pt-10 text-center space-y-2'>
            <h1 className='text-3xl font-bold'>Oops!! App Not Found!</h1>
            <p className='text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
            <button onClick={() => navigate(-1)} className='btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Go Back!</button>
            </div>
            
        </div>
    );
};

export default ErroAppMsg;