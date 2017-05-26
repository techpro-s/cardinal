import React from 'react';
import CardinalNav from '../components/CardinalNav';
import CardinalFooter from '../components/CardinalFooter';
import ProductsCarousel from '../components/home/ProductsCarousel';
import CardinalInfo from '../components/home/CardinalInfo';
import InfoGrid from '../components/home/InfoGrid';
import TrustedCompanies from '../components/home/TrustedCompanies';

function Home() {
    return(
        <div>
            <CardinalNav />
            <ProductsCarousel />
            <InfoGrid />
            <br/>
            <CardinalInfo />
            <TrustedCompanies />
            <br/><br/>
            <CardinalFooter />
        </div>
    );
}

export default Home;
