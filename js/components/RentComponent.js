import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';

import {fetchposts} from '../actions/index';


class RentComponent extends Component {
  componentDidMount() {
    this.props.fetchposts('rent')
  }
  render() {
    return(
      <div>
        <Link to='/'>HOME</Link>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchposts}, dispatch);
}

export default connect(null, mapDispatchToProps)(RentComponent);
