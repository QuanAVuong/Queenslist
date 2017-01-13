import React, {Component} from 'react';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux'

import { Header, Navigation, Textfield, Switch, Button  } from 'react-mdl';

import {fetchOnly, fetchAny, createAd} from '../../actions/index';



class AppBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      tags: "",
      buy: "",
      rent: "",
      sell: "",
      any: true,
      only: false
    }
  }

  handleSwitch(category, event) {
    switch (category) {
      case 'buy':
        if (this.state.buy) {
          this.setState({buy: ''})
        } else {
          this.setState({buy: category})
        }
      break;
      case 'sell':
        if (this.state.sell) {
          this.setState({sell: ''})
        } else {
          this.setState({sell: category})
        }
      break;
      case 'rent':
        if (this.state.rent) {
          this.setState({rent: ''})
        } else {
          this.setState({rent: category})
        };
    }
  }

  handleFilter(stringVar, event) {
    switch (stringVar) {
      case 'any':
        if (this.state.any) {
          this.setState({any: false})
          this.setState({only: true})
        } else {
          this.setState({any: true})
          this.setState({only: false})
        }
      break;
      case 'only':
        if (this.state.only) {
          this.setState({any: true})
          this.setState({only: false})
        } else {
          this.setState({any: false})
          this.setState({only: true})
        };
    }
  }

  handleSearch() {
  //create tag url piece
    let tagString = document.getElementById('tags')
      .value
      .split(" ")
      .join("+")

  // create category url piece
    let categoryString = ''

    if (this.state.buy) {
      categoryString += this.state.buy
    }
    if (this.state.sell) {
      categoryString += "+" + this.state.sell
    }

    if (this.state.rent) {
      categoryString += "+" + this.state.rent
    }

    if (categoryString[0] == '+') {
      categoryString = categoryString.slice(1)
    }

  // send actions
    if (this.state.any) {
      this.props.fetchAny(tagString, categoryString)
    }

    if (this.state.only) {
      this.props.fetchOnly(tagString, categoryString)
      console.log(tagString, categoryString)
    }
  }

  render(){
    return (
      <Header transparent title={<span><span style={{ color: 'black' }}></span><strong  style={{ color: 'black' }}>QueensList</strong></span>}>
        <Navigation>
          <Switch id="buy" onChange={this.handleSwitch.bind(this, 'buy')}><strong  style={{ color: 'black' }}>BUY</strong></Switch>
          <Switch id="sell" onChange={this.handleSwitch.bind(this, 'sell')}><strong  style={{ color: 'black' }}>SELL</strong></Switch>
          <Switch id="rent" onChange={this.handleSwitch.bind(this, 'rent')}><strong  style={{ color: 'black' }}>RENT</strong></Switch>
        </Navigation>

        <Navigation>
          <Switch id="any" checked={this.state.any} onChange={this.handleFilter.bind(this, 'any')} defaultChecked><strong  style={{ color: 'black' }}>ANY</strong></Switch>
          <Switch id="only" checked={this.state.only} onChange={this.handleFilter.bind(this, 'only')}><strong  style={{ color: 'black' }}>ONLY</strong></Switch>
        </Navigation>

        <Navigation>
          <Textfield
            id="tags"
            style={{color:"black"}}
            label="Expandable Input"
            expandable
            expandableIcon="search"
          >
          </Textfield>
        </Navigation>

        <Button
          raised
          onClick={this.handleSearch.bind(this)}
        >Search
        </Button>

      </Header>
    )
  }
}

function mapStateToProps(state) {
  return {
    ads: state.ads
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchAny, fetchOnly }, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
