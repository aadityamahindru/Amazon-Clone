import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></img>
                <div className='home__row'>
                    <Product title="The lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" rating={3} price={17} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" id={1}></Product>
                    <Product title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook ans Whisk, % Litre Glass Bowl" rating={4} price={300} image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" id={2} ></Product>
                    <Product title="Samsung LC49RG90SXZXEN 4th Generation Smart Watch " rating={2} price={12399} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" id={3}></Product>
                </div>
                <div className='home__row'>
                <Product title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal fabric" rating={5} price={1899} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" id={4}></Product>
                <Product title="New Apple iPad Pro (12.9-inch ,Wi-Fi , 128GB) - Silver (4th Generation)" rating={4} price={23699} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" id={5}></Product>
                </div>
                <div className='home__row'>
                <Product title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" rating={5} price={82399} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" id={6}></Product>
                </div>
            </div>
        </div>
    )
}

export default Home
