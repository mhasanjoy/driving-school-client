import React, { useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './AddService.css';

const AddService = () => {
    const [serviceInfo, setServiceInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = event => {
        const newInfo = { ...serviceInfo };
        newInfo[event.target.name] = event.target.value;
        setServiceInfo(newInfo);
    };

    const handleFileChange = event => {
        const newFile = event.target.files[0];
        setFile(newFile);
    };

    const handleAddService = () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', serviceInfo.title);
        formData.append('description', serviceInfo.description);
        formData.append('price', serviceInfo.price);

        fetch('https://whispering-wildwood-29232.herokuapp.com/addService', {
            method: 'POST',
            body: formData
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
                <h3 className="mt-5 ms-5">Add Service</h3>
                <form onSubmit={handleAddService} className="mt-5 ms-5 pe-5">
                    <div>
                        <label className="form-label" htmlFor="title">Service Title</label>
                        <input onBlur={handleBlur} className="form-control" type="text" name="title" id="title" placeholder="Enter Title" />
                    </div>
                    <div className="mt-3">
                        <label className="form-label" htmlFor="description">Description</label>
                        <input onBlur={handleBlur} className="form-control" type="text" name="description" id="description" placeholder="Enter Description" />
                    </div>
                    <div className="mt-3">
                        <label className="form-label" htmlFor="price">Price</label>
                        <input onBlur={handleBlur} className="form-control" type="number" name="price" id="price" placeholder="Enter Price" />
                    </div>
                    <div className="mt-3">
                        <label className="form-label" htmlFor="image">Image</label><br />
                        <input onChange={handleFileChange} type="file" name="image" id="image" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                </form>
            </main>
        </div>
    );
};

export default AddService;