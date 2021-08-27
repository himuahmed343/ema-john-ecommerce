import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Shop from './components/Shop/Shop.js';
import Review from './components/Review/Review.jsx';
import Manage from './components/Manage/Manage.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";



function App() {
  return (
    <div>
    <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          
          <Route path="/review">
            <Review></Review>
          </Route>

          <Route path="/manage">
            <Manage></Manage>
          </Route>
          
          <Route path="/">
            <Shop></Shop>
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
