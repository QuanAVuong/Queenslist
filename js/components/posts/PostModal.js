import React, {Component} from 'react';
import {Grid, FABButton, Icon, Dialog, DialogTitle, DialogContent, DialogActions, Button, Textfield, Chip} from 'react-mdl';


export default class PostModal extends Component {
  constructor(props) {
    super(props)
    this.state = { category: 'sell', title: '', description: '', image: '', email: '', tags: [] };

  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.createAd(this.state)
  }
  handleTitle (e) {
    this.setState({title: e.target.value})
  }
  handlePrice (e) {
    this.setState({price: e.target.value})
  }
  handleCategory (e) {
    this.setState({category: e.target.value})
  }
  handleImage (e) {
    this.setState({image: e.target.value})
  }
  handleDescription (e) {
    this.setState({description: e.target.value})
  }
  handleEmail (e) {
    this.setState({email: e.target.value})
  }
  handleTags (e) {
    let input = e.currentTarget.value.split(/\s+/).filter( elem => elem !== "" );
    let tags = [];
    for (let i = 0; i < input.length; i++) {
      tags.push( { title: input[i] } );
    }
    console.log("tags", tags);
    this.setState({tags: tags})
  }


  render() {
    return (
      <Dialog open={this.props.openModal}>
        <DialogTitle>Create a Queens List Ad</DialogTitle>
        <DialogContent>
        <h6>Sell Some Legit 100% FoReal Stuff</h6>

          <Textfield
            onChange={this.handleTitle.bind(this)}
            label="Title..."
            floatingLabel
            style={{width: '400px'}}
          />
          <Textfield
            onChange={this.handleEmail.bind(this)}
            label="Email..."
            floatingLabel
            style={{width: '400px'}}
          />

          <Textfield
            onChange={this.handleImage.bind(this)}
            label="Image URL..."
            floatingLabel
            style={{width: '400px'}}
          />

          <Textfield
            onChange={this.handlePrice.bind(this)}
            pattern="-?[0-9]*(\.[0-9]+)?"
            error="Input is not a number!"
            label="Price..."
            floatingLabel
          />
          <Textfield
            onChange={this.handleDescription.bind(this)}
            label="Description"
            rows={3}
            style={{width: '200px'}}
          />
          <Textfield
            onChange={this.handleTags.bind(this)}
            label="Tags"
            floatingLabel
            style={{width: '400px'}}
          />

          <div className="well">
            {this.state.tags}
          </div>
        </DialogContent>
        <DialogActions fullWidth>
          <Button type='button' onClick={this.handleSubmit.bind(this)}>Post</Button>
          <Button type='button' onClick={this.props.handleCloseDialog}>Discard</Button>
        </DialogActions>
      </Dialog>
    )
  }

}
