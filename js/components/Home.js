import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux'

import PostCard from './posts/PostCard';
import PostModal from './posts/PostModal';

import {Grid, FABButton, Icon, Dialog, DialogTitle, DialogContent, DialogActions, Button, Textfield, Chip} from 'react-mdl';

import {fetchAds, createAd} from '../actions/index';

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
  componentWillMount() {
    let that = this;
    this.props.fetchAds('sell')
  }

}

function mapStateToProps(state) {
  return {
    ads: state.ads
  }
}
  function mapDispatchToProps( dispatch){
    return bindActionCreators({ fetchAds, createAd }, dispatch)
  }



export default connect(mapStateToProps, mapDispatchToProps)(Home);
