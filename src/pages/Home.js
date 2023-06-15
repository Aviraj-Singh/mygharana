import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from "../components/FeaturedRooms";
import Testimonial from '../Testimonial';

const Home = () => {
  return (
    <>
    <Hero>
        <Banner title='Find Your Dream Stay, Hassle-Free' 
        subtitle='Book your perfect getaway and explore exceptional hospitality with featured rooms starting at ₹299'>
        <Link to='/rooms' className='btn-primary'>Rooms</Link>
        </Banner>
    </Hero>
    <Services />
    <FeaturedRooms />
    <Testimonial />
    </>
  );
};

export default Home;