import React from 'react';
import './Sidebar.css';
import CarWheel from '../../../images/CarWheel.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <section className="col-md-2 text-center sidebar-container">
            <img className="mb-4" src={CarWheel} alt="" />
            <h5><Link className="link-decoration">Book</Link></h5>
            <h5><Link className="link-decoration" to="/review">Review</Link></h5>
            <h5><Link className="link-decoration" to="/addService">Add Service</Link></h5>
            <h5><Link className="link-decoration" to="/makeAdmin">Make Admin</Link></h5>
        </section>
    );
};

export default Sidebar;