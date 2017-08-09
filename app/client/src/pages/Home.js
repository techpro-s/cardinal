import React, { Component } from 'react';
import Cookies from 'universal-cookie';

import ProductsCarousel from '../components/home/ProductsCarousel';
import CardinalInfo from '../components/home/CardinalInfo';
import MainBanner from '../components/home/MainBanner';
import InfoGrid from '../components/home/InfoGrid';
import TrustedCompanies from '../components/home/TrustedCompanies';
import { SERVER_URL, CLIENT_VERSION, REACT_VERSION } from '../config';
import 'whatwg-fetch';


class Home extends Component{

    constructor() {
      super();
      this.state = {
        clientInfo: {
          version: CLIENT_VERSION,
          react: REACT_VERSION
        }
      }
    }

    componentDidMount() {
        const cookies = new Cookies();
        var query = "?lang=" + cookies.get('lang');

        fetch(SERVER_URL + 'application' + query)
          .then(r => r.json())
          .then(json => this.setState({serverInfo: json}))
          .catch(error => console.error('Error connecting to server: ' + error));

    }

    render() {
        if(!this.state.serverInfo){
            return <div></div>
        }
        console.log(this.state.serverInfo.messages);
        return(
            <div>
                <ProductsCarousel messages={this.state.serverInfo.messages.carousel}/>
                <InfoGrid messages={this.state.serverInfo.messages.infogrid} style={{background:"#171717"}}/>

                <CardinalInfo messages={this.state.serverInfo.messages.jumbotron}/>
<MainBanner/>
                <TrustedCompanies messages={this.state.serverInfo.messages.trust}/>

            </div>
        );
    }
}

export default Home;
