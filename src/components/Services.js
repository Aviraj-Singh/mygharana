import React from 'react';
import Title from './Title';
import {FaWifi, FaUserLock, FaTaxi, FaSwimmingPool} from 'react-icons/fa'

const Services = () => {
    const state=[
        {
            icon: <FaWifi />,
            title: 'Wifi Facility',
            info: 'Experience seamless connectivity and convenience with our complimentary high-speed Wi-Fi, allowing you to effortlessly connect, work, and unwind during your hotel stay.'
        },
        {
            icon: <FaUserLock />,
            title: 'Modern Security',
            info: 'Our hotel boasts state-of-the-art security measures, providing a secure environment, so you can unwind and make the most of your stay with complete peace of mind.'
        },
        {
            icon: <FaTaxi />,
            title: 'Cab Facility',
            info: 'Our hotel offers reliable cab services, ensuring hassle-free transportation to explore the city or reach your desired destinations.'
        },
        {
            icon: <FaSwimmingPool />,
            title: 'Pool Facility',
            info: 'Escape the heat and take a refreshing plunge in our pristine pool, offering a serene oasis where you can relax, rejuvenate, and enjoy a blissful retreat at our hotel.'
        }
    ];
  return (
    <section className='services'>
        <Title title='Services' />
        <div className='services-center'>
            {state.map((item, index) =>{
                return(
                    <article key={index} className='service'>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                )
            })}
        </div>
    </section>
  )
}

export default Services;