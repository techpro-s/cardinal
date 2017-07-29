import React, { Component } from 'react';
import CardinalNav from '../components/CardinalNav';
import CardinalFooter from '../components/CardinalFooter';

import MainKit from '../components/kit/MainKit';
import InfoGrid from '../components/kit/InfoGrid';
import PerfectFor from '../components/kit/PerfectFor';
import Languages from '../components/kit/Languages';
import { SERVER_URL, CLIENT_VERSION, REACT_VERSION } from '../config';
import 'whatwg-fetch';


class Kit extends Component{

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
        const search = this.props.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search);
        const lang = params.get('lang'); // bar
        var query = lang != null ? "?lang=" + lang : "";
        fetch(SERVER_URL + 'home/kit' + query)
          .then(r => r.json())
          .then(json => this.setState({serverInfo: json}))
          .catch(error => console.error('Error connecting to server: ' + error));

    }

    render() {
        if(!this.state.serverInfo){
            return <div></div>
        }
        console.log(this.state.serverInfo.messages.navbar);
        return(
            <div>
                <CardinalNav messages={this.state.serverInfo.messages.navbar}/>
                <MainKit messages={this.state.serverInfo.messages.gridMain}/>
                <InfoGrid messages={this.state.serverInfo.messages.infoGrid}/>
                <PerfectFor messages={this.state.serverInfo.messages.perfectFor}/>
                <Languages messages={this.state.serverInfo.messages.languages}/>
                <CardinalFooter messages={this.state.serverInfo.messages.footer}/>
            </div>
        );
    }
}

export default Kit;
