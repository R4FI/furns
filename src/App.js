// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LogIn from './Pages/User/LogIn/LogIn';
import Register from './Pages/User/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import HomeFurniture from './Pages/HomeFurniture/HomeFurniture';
import OfficeFurniture from './Pages/OfficeFurniture/OfficeFurniture';
import HospitalFurniture from './Pages/HospitalFurniture/HospitalFurniture';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/User/PrivateRoute/PrivateRoute';
import AboutUs from './Pages/AboutUS/AboutUs';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <AuthProvider>
       {/* <img src={logo} className="App-logo" alt="logo" /> */}
       <Router>
      <Switch>
      <Route path="/home">
      <Home></Home>
      </Route>

      <Route path="/login">
      <LogIn></LogIn>
      </Route>
      <Route path="/homefurniture">
      <HomeFurniture></HomeFurniture>
      </Route>


      <Route path="/officefurniture">
      <OfficeFurniture></OfficeFurniture>
      </Route>
      <Route path="/hospitalfurniture">
     <HospitalFurniture></HospitalFurniture>
      </Route>

      <Route path="/register">
      <Register></Register>
      </Route>
   
      <PrivateRoute path="/placeorder/:bookingId">
      <PlaceOrder></PlaceOrder>
      </PrivateRoute>

      <Route exact path="/">
      <Home></Home>
      </Route>
     

      <PrivateRoute path="/dashboard">
        <Dashboard></Dashboard>
      </PrivateRoute>

   

     
      <PrivateRoute path="/profile">
        <Profile></Profile>
      </PrivateRoute>

      <Route path="/about">
     <AboutUs></AboutUs>
      </Route>

      </Switch>

      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
