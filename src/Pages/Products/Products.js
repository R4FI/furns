import React from 'react';
import Bonus from '../Bonus/Bonus ';
import Bedroom from './Bedroom/Bedroom';
import Hospital from './Hospital/Hospital';
import Office from './Office/Office';

const Products = () => {
    return (
        <div>
            <Bedroom></Bedroom>
            <Office></Office>
            <Hospital></Hospital> 
            <Bonus></Bonus>  
        </div>
    );
};

export default Products;