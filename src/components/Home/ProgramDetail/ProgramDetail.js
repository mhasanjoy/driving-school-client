import React from 'react';
import { useHistory } from 'react-router';

const ProgramDetail = (props) => {
    const {_id, title, description, price, image} = props.program;

    const history = useHistory();
    const handleOrder = orderId => {
        history.push(`/book/${orderId}`);
    };

    return (
        <div className="col-md-4 text-center">
            <img style={{height: '200px'}} src={`data:image/png;base64,${image.img}`} alt="" />
            <h3 className="mt-3 mb-3">{title}</h3>
            <p>{description}</p>
            <h3 className="mb-3">${price}</h3>
            <button onClick={() => handleOrder(_id)} className="btn btn-primary">Order Now</button>
        </div>
    );
};

export default ProgramDetail;