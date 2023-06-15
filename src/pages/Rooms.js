import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';

const Rooms = () => {
  return (
    <>
    <Hero hero='roomsHero'>
        <Banner title='Find your ideal accommodation' 
        subtitle='Unlock the best hotels, resorts, and homestays at your fingertips'>
        <Link to='/' className='btn-primary'>Home</Link>
        </Banner>
    </Hero>
    <RoomContainer />
    </>
  )
}

export default Rooms;
