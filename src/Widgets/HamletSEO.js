import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

HelmetProvider.canUseDOM = true;
const HamletSEO = () => {
    return (
        <Helmet>
            <title>the tech khazna</title>
            <meta name="description" content='the tech khazna by socialriser' />
        </Helmet>
    )
}

export default HamletSEO