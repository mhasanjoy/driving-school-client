import React, { useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleBlur = event => {
        setEmail(event.target.value);
    };

    const handleSubmit = () => {
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data) {
                    alert("Successfully Added.");
                }
            });
    };

    return (
        <div className="row">
            <Sidebar></Sidebar>
            <main className="col-md-10">
                <h3 className="mt-5 ms-5">Make Admin</h3>
                <form onSubmit={handleSubmit} className="mt-5 ms-5 pe-5">
                    <div className="mt-3">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input onBlur={handleBlur} className="form-control" type="email" name="email" id="email" placeholder="Enter Email" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                </form>
            </main>
        </div>
    );
};

export default MakeAdmin;