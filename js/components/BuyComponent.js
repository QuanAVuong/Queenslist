import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';

import {fetchposts} from '../actions/index';


class BuyComponent extends Component {
  componentDidMount() {
    this.props.fetchposts('buy')
  }
  render() {
    return(
      <div>
        <Link to='/'>Home</Link>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchposts}, dispatch);
}

export default connect(null, mapDispatchToProps)(BuyComponent);
