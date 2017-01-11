import React from "react";

import {Layout, Content} from 'react-mdl';

import AppBar from './common/AppBar';



export class Main extends React.Component {

  render() {
    return (
      <div>
        <AppBar />
        {this.props.children}
      </div>
    );
  }
}


export default Main;
