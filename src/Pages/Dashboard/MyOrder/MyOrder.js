import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

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
          {orders?.map((order)=>(

         
            <Box className="orderbox">
            <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={3}>
          <Grid item>
           
          </Grid>
          <Grid item md >
            <Typography>{order?.bookname}</Typography>
            <Typography>{order?.name}</Typography>
            <Typography>{order?.email}</Typography>
            <Typography>{order?.phone}</Typography>
            <Typography>{order?.price}</Typography>
            <Typography>{order?.Address}</Typography>
           
          </Grid>
         
        </Grid>
        <Stack direction="row" spacing={3}>
              <Button  onClick={() => handleDeleteOrder(order._id)} variant="outlined">
                Delete
              </Button> <br/>
              <Button>{order?.payment ? 'Paid' :
              
              <Link to={`dashboard/paylink/${order._id}`}>Pay Now</Link>
              }</Button>
            </Stack>
      </Paper>
      
            </Box>
             ))}
        </div>
    );
};

export default MyOrder;