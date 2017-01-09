import React from "react";
import {connect} from 'react-redux';


export class Main extends React.Component {
  render() {
    console.log(this.props.posts)
    return (
      <div>
        <h3>Queens List</h3>

        {this.props.children}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Main);
