var React = require('react')
var $ = require('jquery')
import {Link} from 'react-router';

var CreatePost = React.createClass({
  getInitialState: function () {
    return({category: null, title: null, description: null, images: [], email: null, tags: null})
  },
  createPost: function (e) {
    e.preventDefault()
    var info = this.state
    console.log(info)
    $.ajax({
      url: "/api/createPost",
      type: "POST",
      data: info,
      success: function(data) {
        console.log(data)
      }
    })
  },

  updateCategory: function(e) {
    this.setState({category: e.currentTarget.value})
  },
  updateTitle: function(e) {
    this.setState({title: e.currentTarget.value})
  },
  updateDescription: function(e) {
    this.setState({description: e.currentTarget.value})
  },
  updateImages: function(e) {
    var imgArray = this.state.images
    imgArray.push(e.currentTarget.value)
    this.setState({images: imgArray})
  },
  updateEmail: function(e) {
    this.setState({email: e.currentTarget.value})
  },
  updateTag: function(e) { 
    let input = e.currentTarget.value.split(/\s+/).filter( elem => elem !== "" );
    let tags = [];
    for (let i = 0; i < input.length; i++) {
      tags.push( { title: input[i] } ); // "tags": [{"title": "space"}, {"title": "ship"}, {"title": "real"}]
    }
    console.log("tags", tags);
    this.setState({tags: tags})
    // debugger;
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.createPost}><br/>
          Please Fill Out Your Post Info: <br/><br/>
          Category:
          <input type="text" placeholder="category eg. Buy | Sell | Rent" onChange={this.updateCategory}></input><br/>
          Title:
          <input type="text" placeholder="title" onChange={this.updateTitle}></input><br/>
          Description:
          <input type="text" placeholder="description" onChange={this.updateDescription}></input><br/>
          Image URLs:
          <input type="text" placeholder="images" onChange={this.updateImages}></input><br/>
          Email:
          <input type="text" placeholder="email" onChange={this.updateEmail}></input><br/>
          Tags:
          <input type="text" placeholder="tags eg. cheap | new" onChange={this.updateTag}></input><br/>

          <input type="submit" value="Submit A New Post !"></input><hr/>

          <Link to='/'>Home</Link>
        </form>
      </div>
    )
  }
})

module.exports = CreatePost



/*{ 
  "category": "rent",
  "title": "explosive cannonballs",
  "description": "Steel forged explosive cannonballs. Guaranteed to cripple or sink a Spanish galleon with as few as 3 direct hits. Rent only. Cannonballs must be returned undamaged or additional fees may apply",
  "images": [],
  "email": "oiyouscuffedmykangaroo@meme.bro",
  "tags": [{"title": "explosive"}, {"title": "ammo"}, {"title": "cannon"}]
}*/