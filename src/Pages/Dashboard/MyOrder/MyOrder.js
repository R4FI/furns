import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    const [orders,setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);


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

         
            <Box>
            <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={3}>
          <Grid item>
           
          </Grid>
          <Grid item md >
            <Typography>{order?.bookname}</Typography>
            <Typography>{order?.name}</Typography>
            <Typography>{order?.email}</Typography>
            <Typography>{order?.phone}</Typography>
            <Typography>{order?.Address}</Typography>
           
          </Grid>
         
        </Grid>
        <Stack direction="row" spacing={3}>
              <Button  onClick={() => handleDeleteOrder(order._id)} variant="outlined">
                Delete
              </Button>
            </Stack>
      </Paper>
      
            </Box>
             ))}
        </div>
    );
};

export default MyOrder;