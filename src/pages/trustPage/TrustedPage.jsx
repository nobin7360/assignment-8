import React from 'react';
import "./TrustPage.css"

const TrustedPage = () => {
    return (
        <div className='p-10 space-y-2 gradient-bg flex flex-col justify-center items-center text-center'>
            <h1>Trusted by Millions, Built for You</h1>
            <div className='flex justify-between align-center gap-10'>
                <div>
                    <p>Total Downloads</p>
                    <h1>29.6M</h1>
                    <p>21% more than last month</p>
                </div>
                <div>
                    <p>Total Reviews</p>
                    <h1>906K</h1>
                    <p>46% more than last month</p>
                </div>
                <div>
                    <p>Active Apps</p>
                    <h1>132+</h1>
                    <p>31 more will Launch</p>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default TrustedPage;