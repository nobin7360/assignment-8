import React from 'react';
import errorPage from '../../assets/error-404.png'
import { useNavigate } from 'react-router';


const ErrorPage = () => {
    const navigate=useNavigate();
    return (
        <div className='hero mt-6 flex flex-col items-center'>
            <div><img src={errorPage} alt="" /></div>
            <div className='pt-10 text-center space-y-2'>
            <h1 className='text-3xl font-bold'>Oops Page Not Found!</h1>
            <p className='text-[#627382]'>The page you are looking for is not available.</p>
            <button onClick={() => navigate(-1)} className='btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Go Back!</button>
            </div>
            
        </div>
    );
};

export default ErrorPage;