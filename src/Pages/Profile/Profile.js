import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';
import './Profile.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyOrder from '../Dashboard/MyOrder/MyOrder';
import Reviews from '../Dashboard/Reviews/Reviews';
import MakeAdmin from '../Dashboard/Admin/MakeAdmin';
import ManageOrder from '../Dashboard/ManageOrder/ManageOrder';
import ManageProduct from '../Dashboard/ManageProduct/ManageProduct';
import AddProduct from '../Dashboard/AddProducts/AddProduct';
import Payment from '../Dashboard/Payment/Payment';
const Profile = () => {
    const {user,admin} = useAuth();
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
        return (
            <div
              role="tabpanel"
              hidden={value !== index}
              id={`simple-tabpanel-${index}`}
              aria-labelledby={`simple-tab-${index}`}
              {...other}
            >
              {value === index && (
                <Box sx={{ p: 3 }}>
                  <Typography>{children}</Typography>
                </Box>
              )}
            </div>
          );
        }
        
        TabPanel.propTypes = {
          children: PropTypes.node,
          index: PropTypes.number.isRequired,
          value: PropTypes.number.isRequired,
        };
        
        function a11yProps(index) {
          return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
          };
        }
        
      
          const [value, setValue] = React.useState(0);
        
          const handleChange = (event, newValue) => {
            setValue(newValue);
          };
    return (
        <div>
            <Header></Header>
            <h2 className="welcomename">{user?.displayName}</h2>
          {
              admin &&
              <Container className="mt-5">
              <Row>
                  <Col md={6}>
                  <img className="welcomeprofile" src={user?.photoURL} alt="" />
                  </Col>
                  <Col md={6}>
                    <h3 className="ms-5 mt-3" style={{textAlign:'left'}}>User Name: {user?.displayName}</h3>
                    <h3 className="ms-5 mt-3" style={{textAlign:'left'}}>User Email: {user?.email}</h3>
                  </Col>
              </Row>
              <Box sx={{ width: '100%',mt:'5%' }}>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          
          <Tab label="Make Admin" {...a11yProps(0)} />
          <Tab label="Manage Order" {...a11yProps(1)} />
          <Tab label="Manage Product" {...a11yProps(2)} />
          <Tab label="Add Product" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel className="tabbg text-white" value={value} index={0}>
            <MakeAdmin></MakeAdmin>
      </TabPanel>
      <TabPanel className="tabbg" value={value} index={1}>
           <ManageOrder></ManageOrder>
      </TabPanel>
      <TabPanel className="tabbg" value={value} index={2}>
           <ManageProduct></ManageProduct>
      </TabPanel>
      <TabPanel className="tabbg" value={value} index={3}>
           <AddProduct></AddProduct>
      </TabPanel>
         </Box>

            </Container>
          }
          {
              !admin &&
              <Container className="mt-5">
              <Row>
                  <Col md={6}>
                  <img className="welcomeprofile" src={user?.photoURL} alt="" />
                  </Col>
                  <Col md={6}>
                    <h3 className="ms-5 mt-3" style={{textAlign:'left'}}>User Name: {user?.displayName}</h3>
                    <h3 className="ms-5 mt-3" style={{textAlign:'left'}}>User Email: {user?.email}</h3>
                  </Col>

              </Row>
             <Box sx={{ width: '100%',mt:'5%' }}>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          
          <Tab label="My Order" {...a11yProps(0)} />
          <Tab label="Review" {...a11yProps(1)} />
          
       
        </Tabs>
      </Box>
      <TabPanel className="tabbg text-white" value={value} index={0}>
      <MyOrder></MyOrder>
      </TabPanel>
      <TabPanel className="tabbg" value={value} index={1}>
            <Reviews></Reviews>
      </TabPanel>
      {/* <TabPanel className="tabbg" value={value} index={2}>
         <Payment></Payment>
      </TabPanel> */}
         </Box>
            </Container>
          }

    
        </div>
    );
};

export default Profile;