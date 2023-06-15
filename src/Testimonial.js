import React from 'react';
import Review from './components/Card';
function Testimonial() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review/>
      </section>
    </main>
  );
}

export default Testimonial;