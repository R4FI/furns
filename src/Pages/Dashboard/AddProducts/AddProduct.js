import React from 'react';
import HomeFurn from './HomeFurn/HomeFurn';
import HospitalFurn from './HospitalFurn/HospitalFurn';
import OfficeFurn from './OfficeFurn/OfficeFurn';

const AddProduct = () => {
    return (
        <div>
            <HomeFurn></HomeFurn>
            <OfficeFurn></OfficeFurn>
            <HospitalFurn></HospitalFurn>
        </div>
    );
};

export default AddProduct;