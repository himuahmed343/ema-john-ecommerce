import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Shop from './components/Shop/Shop.js';
import Review from './components/Review/Review.jsx';
import Manage from './components/Manage/Manage.jsx';
import NotFound from './components/NotFound/NotFound';
import ProdDetails from './components/ProdDetails/ProdDetails';

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
          
          <Route exact path="/">
            <Shop></Shop>
          </Route>

          <Route path="/product/:productKey">
            <ProdDetails></ProdDetails>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

          


        </Switch>
      </Router>
    </div>
  );
}

export default App;
