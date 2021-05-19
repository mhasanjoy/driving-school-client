import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import Login from './components/Login/Login/Login';
import Admin from './components/Admin/Admin/Admin';
import AddService from './components/Admin/AddService/AddService';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import Service from './components/Service/Service/Service';
import Review from './components/Service/Review/Review';
import Home from './components/Home/Home/Home';
import Book from './components/Service/Book/Book';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <PrivateRoute path="/service">
            <Service></Service>
          </PrivateRoute>
          <PrivateRoute path="/book/:id">
            <Book></Book>
          </PrivateRoute>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
