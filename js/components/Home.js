import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux'

import PostCard from './posts/PostCard';
import PostModal from './posts/PostModal';

import {Grid, FABButton, Icon, Dialog, DialogTitle, DialogContent, DialogActions, Button, Textfield, Chip} from 'react-mdl';

import {fetchOnly, fetchAny, createAd} from '../actions/index';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {openDialog: false, currentAds: []};

    this.handleOpenDialog.bind(this)
  }

  handleOpenDialog() {
  this.setState({
    openDialog: true
  });
}

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  render() {
    console.log(this.props.ads)
    let temp =[]
    if(this.props.ads.length >=1){

      this.props.ads.forEach((val, idx) => {
        temp.push(<PostCard data={val} key={idx} />)
      })
    }
    return(
      <div>

        <Grid className="demo-grid-1">
          {temp}
        </Grid>
        <div className="centered">

          <FABButton colored ripple onClick={this.handleOpenDialog.bind(this)}>
            <Icon name="add" />
          </FABButton>

          <PostModal createAd={this.props.createAd} openModal={this.state.openDialog} handleCloseDialog={this.handleCloseDialog.bind(this)}/>

        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ads: state.ads
  }
}

function mapDispatchToProps( dispatch){
  return bindActionCreators({ fetchAny, fetchOnly, createAd }, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);
