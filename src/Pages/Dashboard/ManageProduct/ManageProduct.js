import React from 'react';
import ManageFurn from './ManageFurn/ManageFurn';
import ManageHospital from './ManageHospital/ManageHospital';
import ManageOffice from './ManageOffice/ManageOffice';
import './ManageProduct.css';
const ManageProduct = () => {
    return (
        <div>
             <ManageFurn></ManageFurn>
             <ManageOffice></ManageOffice>
             <ManageHospital></ManageHospital>
        </div>
    );
};

export default ManageProduct;