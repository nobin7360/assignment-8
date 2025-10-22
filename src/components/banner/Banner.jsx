import React from 'react';
import BannerPage from '../../pages/bannerpage/BannerPage';
import Hero from '../../pages/hero/Hero';
import TrustedPage from '../../pages/trustPage/TrustedPage';

const Banner = () => {
    return (
        <div>
            <BannerPage></BannerPage>
            <Hero></Hero>
            <TrustedPage></TrustedPage>
        </div>
    );
};

export default Banner;