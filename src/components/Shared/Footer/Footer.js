import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const drivingSchool = [
        {name: "We provide a reputable and profes- sional service that aims to give you the confidence to pass your test and drive safely on the roads."}
    ];
    const ourAddress = [
        {name: "New York - 101010 Hudson"},
        {name: "Yards"}
       
    ];
    const information = [
        {name: "FAQ"},
        {name: "Locations"},
        {name: "Testimonials"},
        {name: "Partners"}
    ];
    const services = [
        {name: "Search Terms"},
        {name: "Site Map"},
        {name: "Privacy"},
        {name: "Terms of Use"},
        {name: "Contact Us"}
    ];

    return (
        <footer className="footer-area clear-both mt-5">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Driving School"} menuItems={drivingSchool}/>
                    <FooterCol key={2} menuTitle="Customer Service" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Information" menuItems={information}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5 text-white">
                            <h6>Call now</h6>
                            <h6>+2025550295</h6>
                        </div>
                    </FooterCol>
                </div>
                <div className="text-white text-center pb-2">
                    <p>&copy; {(new Date()).getFullYear()} Safe Drive Driving School</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;