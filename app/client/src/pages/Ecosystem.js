import React, { Component } from 'react';
import Cookies from 'universal-cookie';

import MainEcosystem from '../components/ecosystem/MainEcosystem';
import HowItWorks from '../components/ecosystem/HowItWorks';
import Challenges from '../components/ecosystem/Challenges';
import InfoGrid from '../components/ecosystem/InfoGrid';
import Events from '../components/ecosystem/Events';
import { SERVER_URL, CLIENT_VERSION, REACT_VERSION } from '../config';
import 'whatwg-fetch';


class Ecosystem extends Component{

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

        fetch(SERVER_URL + 'home/ecosystem' + query)
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
                <MainEcosystem messages={this.state.serverInfo.messages.gridMain}/>
                <HowItWorks messages={this.state.serverInfo.messages.howItWorks}/>
                <Challenges messages={this.state.serverInfo.messages.challenges}/>
                <InfoGrid messages={this.state.serverInfo.messages.infoGrid}/>
                <Events messages={this.state.serverInfo.messages.events}/>
            </div>
        );
    }
}

export default Ecosystem;
