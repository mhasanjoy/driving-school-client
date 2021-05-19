import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Ipm5GDhY4Ovhi0sQJ35B3sww99jF7DEKxjh2j9HYMQXoTb48wPLxs4YKfZ9DnD8gdGFFAGiNWBU6Att7P1oZoQr00824Nz23W');

const Book = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    const [order, setOrder] = useState({});

    const handleChange = event => {
        const orderInfo = { ...order };
        orderInfo[event.target.name] = event.target.value;
        setOrder(orderInfo);
    };

    useEffect(() => {
        fetch('https://whispering-wildwood-29232.herokuapp.com/programs/' + id)
            .then(response => response.json())
            .then(data => setService(data));
    }, [id]);

    const handlePayment = () => {
        fetch('https://whispering-wildwood-29232.herokuapp.com/orders', {
            method: 'POST',
            body: JSON.stringify({name: order.name, email: order.email, service: service.title, price: service.price}),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        })
        .then(response => response.json())
        .then(data => {
            console.log('Payment successful.');
            if(data){
                alert('Payment successful.');
            }
        });
    };

    return (
        <div className="row">
            <Sidebar></Sidebar>
            <main className="col-md-10">
                <h3 className="mt-5 ms-5">Book</h3>
                <form onSubmit={handlePayment} className="mt-5 ms-5 pe-5">
                    <div>
                        <input onChange={handleChange} className="form-control" type="text" name="name" placeholder="Enter Name" />
                    </div>
                    <div className="mt-3">
                        <input onChange={handleChange} className="form-control" type="email" name="email" placeholder="Enter Email" />
                    </div>
                    <div className="mt-3">
                        <input className="form-control" type="text" name="service" value={service.title} disabled />
                    </div>

                    <div className="mt-3">
                        <h6>Pay with</h6>
                        <Elements stripe={stripePromise}>
                            <CardElement
                                options={{
                                    style: {
                                        base: {
                                            fontSize: '16px',
                                            color: '#424770',
                                            '::placeholder': {
                                                color: '#aab7c4',
                                            },
                                        },
                                        invalid: {
                                            color: '#9e2146',
                                        },
                                    },
                                }}
                            />
                        </Elements>
                    </div>

                    <p className="mt-3"><strong>Your service charge will be ${service.price}</strong></p>
                    <button type="submit" className="btn btn-primary">Pay</button>
                </form>
            </main>
        </div>
    );
};

export default Book;