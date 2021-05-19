import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header/Header';
import Programs from '../Programs/Programs';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Programs></Programs>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;