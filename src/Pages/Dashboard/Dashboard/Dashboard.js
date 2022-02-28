import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { AddBox, AddModerator, Article, Assignment, Home,ModeEdit, Payment, StarRate } from '@mui/icons-material';
import AddProduct from '../AddProducts/AddProduct';
import MakeAdmin from '../Admin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import ManageProduct from '../ManageProduct/ManageProduct';
import ManageOrder from '../ManageOrder/ManageOrder';
import Reviews from '../Reviews/Reviews';
const drawerWidth = 240;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
//   const {admin,logout} = useAuth();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const {admin} = useAuth();
  let { path, url } = useRouteMatch();
  return (
  
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <Link to="/home"><Button startIcon={<Home/>}>Home</Button></Link> 
        { !admin &&
          <Box>
          <Link to={`${url}/paylink`}><Button startIcon={<Payment/>}>Pay Link</Button></Link>  <br />
          <Link to={`${url}/myorder`}><Button startIcon={<Article />}>My Order</Button></Link>  <br />
          <Link to={`${url}/review`}><Button startIcon={<StarRate />}>Review</Button></Link><br />
         
         
           </Box>
          }
        
         { admin &&
          <Box>
          <Link to={`${url}/manageOrder`}><Button startIcon={<ModeEdit />}>Manage All Order</Button></Link>
          <Link to={`${url}/addproduct`}><Button startIcon={<AddBox/>}>Add Products</Button></Link> <br />
          <Link to={`${url}/makeAdmin`}><Button startIcon={<AddModerator/>}>Make Admin</Button></Link> <br />
          <Link to={`${url}/manageProduct`}><Button startIcon={<Assignment />}>Manage Product</Button></Link><br /> 
          
          </Box>
          }
        {/* <List>
         
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
            
            <Switch>
        <Route exact path={`${path}/addproduct`}>
          <AddProduct></AddProduct>
        </Route>
        <Route exact path={`${path}/ordermy`}>
      
        </Route>
        <Route exact path= {`${path}/review`}>
        </Route>
        <Route exact path= {`${path}/myorder`}>
          <MyOrder></MyOrder>
        </Route>
      </Switch>
        </Typography>
        <Route exact path= {`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route exact path= {`${path}/manageProduct`}>
          <ManageProduct></ManageProduct>
        </Route>
        <Route exact path= {`${path}/manageOrder`}>
        <ManageOrder></ManageOrder>
        </Route>
        <Route exact path= {`${path}/review`}>
        <Reviews></Reviews>
        </Route>
        <Typography paragraph>
       
        </Typography>
      </Main>
    </Box>
  );
}
