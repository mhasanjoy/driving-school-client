import React from 'react';
import './Navbar.css';
import CarWheel from '../../../images/CarWheel.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light container mb-5">
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-center">
                    <img style={{ height: '70px' }} src={CarWheel} alt="" />
                    <h2 style={{paddingTop: '10px'}}>Driving School</h2>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end mt-3" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link to="/service" className="nav-link">Service</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link to="/admin" className="nav-link">Admin</Link>
                        </li>
                        <li className="nav-item ms-5 login">
                            <Link to="/login" className="nav-link" style={{color: 'white'}}>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;