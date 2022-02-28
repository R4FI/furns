import React from 'react';
import { Link } from 'react-router-dom';
const HomeFurnitureSingle = ({offer}) => {
    const { _id, name,price, rating, image } = offer;
    return (
        <div className="col-lg-3 col-md-3 col-12">
             <div className="offer-card">
                <div className="offer-img">
                    <img src={image} alt="" />
                </div>
                <div className="offer-info">
                    <h5 style={{textAlign:'left'}}>{name}</h5>
                    <h6 style={{textAlign:'left'}}>Price ${price}</h6>
                    <p style={{textAlign:'left'}}>Rating:{rating}</p>
                </div>
                <div>
                    <Link to={`/placeorder/${_id}`}>
                        <button className="bttn">Buy Now</button>
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default HomeFurnitureSingle;