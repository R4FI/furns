import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [allOrders]);

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
                        const remainingOrder = allOrders.filter(order => order._id !== id);
                        setAllOrders(remainingOrder);
                    }
                });
        }
  
    }

    return (
        <div>
              <div className="allOrder-container">
            <div className="container">
                <h2 className="allOrder-title pb-3">Your Orders Available: {allOrders.length}</h2>
                
                <div className="allOrder-table">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {allOrders?.map((order, index) => (
                            <tbody>
                                <tr>
                                    <td>{index}</td>
                                    <td>{order?.bookname}</td>
                                    <td>{order?.name}</td>
                                    <td>{order?.email}</td>
                                    <td>{order?.phone}</td>
                                    <td>{order?.createdAt}</td>
                                    <td>{order?.Address}</td>
                                    {/* <td><span className="status">{order?.status}</span></td> */}
                                    <button
                                        onClick={() => handleDeleteOrder(order._id)}
                                       
                                        className="btn btn-danger delete-btn px-3 py-2">Delete</button>
                                  
                                        {/* <button onClick={()=>handleUpdate(order._id)} className="btn btn-danger delete-btn px-3 py-2">Update</button> */}
                                </tr>
                               
                            </tbody>
                            
                        ))}
                    </Table>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default ManageOrder;