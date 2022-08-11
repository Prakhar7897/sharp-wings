import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPlus, faEdit,faCamera,faList } from "@fortawesome/free-solid-svg-icons";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Registration from './components/Registration';
import AdLogin from './components/AdLogin';
import Admin from './components/Admin';
import User from './User';
import ViewUser from'./components/ViewUser';
import ViewAdmin from'./components/ViewAdmin';
import CreateAdmin from './components/CreateAdmin';
import Footer from './components/Footer';
import PassengerList from './components/PassengerList';
import FlightDetails from './components/FlightDetails';
import TicketBooking from './components/TicketBooking';
import TicketDetails from './components/TicketDetails';
import UserProfile from './components/UserProfile';


library.add(faTrash,faEdit,faPlus,faList)


function App() {
  return (
    <div className="App">
      <header className="App-header">
     
     <img src="/images/logo.jpg" className="App-logo" alt="logo"></img>
     <h1>  Sharp Wings  </h1>
      </header>

      <div style={{ backgroundImage: "url(/images/bg2.webp)",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition:'center',
                    minHeight: '100vh',
                    minWidth: '100vw',
                    backgroundSize:"cover"
                    }}>

      <Router>
        <Navbar></Navbar>
        <div className='container'>
        <Switch>
        <Route path='/' exact component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/adlogin' component={AdLogin}></Route>
          <Route path='/register_user' component={Registration}></Route>
          <Route path='/passenger' component={PassengerList}></Route>
          <Route path='/fightDetails/:id' component={FlightDetails}></Route>
          <Route path='/booking' component={TicketBooking}></Route>
          <Route path='/pdetails' component={TicketDetails}></Route>
          <Route path='/userProfile' component={UserProfile}></Route>
          


          <Route path='/admin'  component={Admin}></Route>
          <Route path='/user'  component={User}></Route>
          <Route path='/viewAdmin/:id'  component={ViewAdmin}></Route>
          <Route path='/addAdmin/:id'  component={CreateAdmin}></Route>

          <Route path='/viewUser/:id'  component={ViewUser}></Route>
        </Switch>
        </div>
      </Router>
    </div>
    <footer className="Footer">
        <Footer></Footer>

      </footer> 
    </div>
  );
}

export default App;
