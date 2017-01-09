import React from 'react';
import {Route, IndexRoute, } from 'react-router'

import Main from './components/Main';
import BuyComponent from './components/BuyComponent';
import Home from './components/Home';
import SellComponent from './components/SellComponent';
import RentComponent from './components/RentComponent';

export default (
  <Route path='/' component={Main}>
    <IndexRoute component={Home}/>
    <Route path='/buy' component={BuyComponent} />
    <Route path='/sell' component={SellComponent} />
    <Route path='/rent' component={RentComponent} />
  </Route>
)
