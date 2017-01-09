import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect } from 'react-redux';



class Home extends Component {

  render() {
    return(
      <div>
        <Link to='buy'>BUY</Link>
        <Link to='sell'>SELL</Link>
        <Link to='rent'>RENT</Link>
      </div>
    )
  }
}

export default Home;
