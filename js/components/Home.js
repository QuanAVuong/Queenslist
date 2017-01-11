import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux'

import PostCard from './posts/PostCard';
import PostModal from './posts/PostModal';

import {Grid, FABButton, Icon, Dialog, DialogTitle, DialogContent, DialogActions, Button, Textfield, Chip} from 'react-mdl';

import {fetchAds, createAd} from '../actions/index';

// category: req.body.category,
// title: req.body.title,
// description: req.body.description,
// images: req.body.images,
// email: req.body.email,

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
    if(this.props.ads) {
      console.log(this.props.ads)
    }
    return(
      <div>

        <Grid className="demo-grid-1">
          <PostCard col={4} />
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
  componentDidMount() {
    let that = this;
    this.props.fetchAds('sell')
      .then(() => {
        that.setState({currentAds: that.props.ads})
      })
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
