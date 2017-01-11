import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect } from 'react-redux';



class Home extends Component {

  render() {
    return(
      <div>
        <Link to='buy'>BUY</Link><br/>
        <Link to='sell'>SELL</Link><br/>
        <Link to='rent'>RENT</Link><br/>
        <Link to='createPost'>Submit A Post</Link>
      </div>
    )
  }
}

export default Home;
