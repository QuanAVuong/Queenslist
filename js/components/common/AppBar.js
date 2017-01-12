import React from 'React';

import { Header, Navigation, Textfield, Switch  } from 'react-mdl';



const AppBar = () => (
  <Header transparent title={<span><span style={{ color: 'black' }}></span><strong  style={{ color: 'black' }}>QueensList</strong></span>}>
    <Navigation>
      <Switch id="buy"><strong  style={{ color: 'black' }}>BUY</strong></Switch>
      <Switch id="sell"><strong  style={{ color: 'black' }}>SELL</strong></Switch>
      <Switch id="rent"><strong  style={{ color: 'black' }}>RENT</strong></Switch>
    </Navigation>

    <Navigation>
      <Textfield
        style={{color:"black"}}
        onChange={() => {}}
        label="Expandable Input"
        expandable
        expandableIcon="search"
      >
      </Textfield>


    </Navigation>

  </Header>
)

export default AppBar;
