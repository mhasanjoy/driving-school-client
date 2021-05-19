import React from 'react';

const TestimonialDetail = (props) => {
    const {name, company, description} = props.testimonial;

    return (
        <div className="col-md-4 text-center">
            <h5 className="mt-3">{name}</h5>
            <h6>{company}</h6>
            <p className="mt-3">{description}</p>
        </div>
    );
};

export default TestimonialDetail;