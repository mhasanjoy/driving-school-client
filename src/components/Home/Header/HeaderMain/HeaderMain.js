import React from 'react';
import DrivingLicense from '../../../../images/DrivingLicense.jpg';

const HeaderMain = () => {
    return (
        <main style={{height:'400px'}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Smart Drivers <br/> Start Here</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
            </div>
            <div className="col-md-6 col-sm-6 col-12 justify-content-end d-flex pe-5">
                <img src={DrivingLicense} alt="" style={{height: '400px'}} className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;