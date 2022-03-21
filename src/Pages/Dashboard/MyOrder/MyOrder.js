import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './MyOrder.css';
import { Table } from 'react-bootstrap';
import { Button } from '@mui/material';
const MyOrder = () => {
    const [orders,setOrders] = useState([]);
    const {user} = useAuth();
    useEffect(() => {
      fetch(`http://localhost:7000/orders?email=${user.email}`)
          .then(res => res.json())
          .then(data => setOrders(data));
  }, [user.email]);


    // delete
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, You want to delete your order')
        if (proceed) {
            const url = `http://localhost:7000/orders/${id}`;
            fetch (url , {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully')
                        const remainingOrder = orders.filter(order => order._id !== id);
                        setOrders(remainingOrder);
                    }
                });
        }
  
    }

    return (
        <div>
            <h3>Products You Ordered :{orders.length}</h3>
            <Table striped bordered hover>
                <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Price</th>
                                <th>Adress</th>
                                <th>Action</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        {orders?.map((order,index)=>(
                      
                      <tbody>
                     <tr>
                      <td>{index+1}</td>
                      <td>{order?.bookname}</td>
                      <td>{order?.name} </td>
                      <td>{order?.email}</td>  
                      <td>{order?.phone}</td> 
                      <td>{order?.price}</td>
                      <td>{order?.Address}</td>
                
              <td> 
                 <button className="orderbtn"  onClick={() => handleDeleteOrder(order._id)} variant="outlined">
                        Delete
                      </button>
                      </td>


                   <td>   
                     <button className="btnorder">{order?.payment ? 'Paid' :
                      
                      <Link className="orderbtn2" to={`dashboard/paylink/${order._id}`}>Pay Now</Link>
                      }</button>
                       </td>
                           </tr>
                      </tbody>
                     ))}
                </Table>
        
        </div>
    );
};

export default MyOrder;