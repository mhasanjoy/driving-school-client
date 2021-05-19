import React, { useEffect, useState } from 'react';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('https://whispering-wildwood-29232.herokuapp.com/testimonials')
            .then(response => response.json())
            .then(data => {
                setTestimonials(data);
            });
    }, []);

    return (
        <section className="mt-5 pt-5">
            <div className="text-center">
                <h1 style={{ color: 'rebeccapurple' }}>Testimonials</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-3 pt-5">
                    {
                        testimonials.map(testimonial => <TestimonialDetail testimonial={testimonial} key={testimonial._id}></TestimonialDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;