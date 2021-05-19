import React, { useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const Review = () => {
    const [reviewInfo, setReviewInfo] = useState({});

    const handleBlur = event => {
        const newInfo = { ...reviewInfo };
        newInfo[event.target.name] = event.target.value;
        setReviewInfo(newInfo);
    };

    const handleSubmit = () => {
        fetch('http://localhost:5000/review', {
            method: 'POST',
            body: JSON.stringify(reviewInfo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data){
                alert('Successfully Added.');
            }
        });
    };

    return (
        <div className="row">
            <Sidebar></Sidebar>
            <main className="col-md-10">
                <h3 className="mt-5 ms-5">Review</h3>
                <form onSubmit={handleSubmit} className="mt-5 ms-5 pe-5">
                    <div className="mt-3">
                        <input onBlur={handleBlur} className="form-control" type="text" name="name" placeholder="Your Name" />
                    </div>
                    <div className="mt-3">
                        <input onBlur={handleBlur} className="form-control" type="text" name="company" placeholder="Designation, Company's Name" />
                    </div>
                    <div className="mt-3">
                        <input onBlur={handleBlur} className="form-control" type="text" name="description" placeholder="Description" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                </form>
            </main>
        </div>
    );
};

export default Review;