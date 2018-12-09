import React, { Component } from 'react';
import './App.css';

import Parallax from './Parallax/Parallax.js';
import Header from './Header/Header';
import parallax1 from './media/parallax-1.jpg'
import Block from './Block/Block';
import Separator from './Separator/Separator';
import LeftLined from './LeftLined/LeftLined';
import Paragraph from './Paragraph/Paragraph';
import VerticalSpaced from './VerticalSpaced/VerticalSpaced';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Parallax img={parallax1}>
        <div >
          <LeftLined wrapClassName="left-lined-header">
            <div className="page-header">
              <Header>Nordic Cabin</Header>
              <div className="definition">
                <span className="phonemic">/ˈnɔːdɪk/ /ˈkabɪn/</span>
                a small wooden shelter or house, relating to or denoting a simpler living in Värmland, Sweden
              </div>
            </div>
          </LeftLined>        
        </div>

        </Parallax>

        <Block>
          <LeftLined>
            <Header>From London to the woods</Header>
          </LeftLined>

          <VerticalSpaced>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia quis vel eros donec ac odio tempor orci dapibus. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Sit amet commodo nulla facilisi nullam vehicula ipsum. Volutpat ac tincidunt vitae semper quis lectus nulla. Netus et malesuada fames ac turpis. Dui faucibus in ornare quam. Netus et malesuada fames ac turpis egestas sed tempus. Proin fermentum leo vel orci porta non. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. In nisl nisi scelerisque eu. Malesuada fames ac turpis egestas. Non blandit massa enim nec. Lacinia at quis risus sed. Leo integer malesuada nunc vel risus. Bibendum at varius vel pharetra vel turpis nunc eget. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Enim praesent elementum facilisis leo vel. Laoreet suspendisse interdum consectetur libero id.            
            </Paragraph>
          </VerticalSpaced>

        </Block>
        {/* <div className="page-header">
          <Header className="header">Cabin Fever</Header>
          <Address className="address">&lt;Värmland, Sweden /&gt;</Address>
        </div> */}

      </div>
    );
  }
}

export default App;
