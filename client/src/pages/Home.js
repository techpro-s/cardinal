import React, { Component } from 'react';
import CardinalNav from '../components/CardinalNav';
import CardinalFooter from '../components/CardinalFooter';
import ProductsCarousel from '../components/home/ProductsCarousel';
import CardinalInfo from '../components/home/CardinalInfo';
import InfoGrid from '../components/home/InfoGrid';
import TrustedCompanies from '../components/home/TrustedCompanies';
import { SERVER_URL, CLIENT_VERSION, REACT_VERSION } from '../config';
import 'whatwg-fetch';

class Home extends Component{

    constructor() {
      super();
      this.state = {
        serverInfo: {},
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
        fetch(SERVER_URL + '/application' + query)
          .then(r => r.json())
          .then(json => this.setState({serverInfo: json}))
          .catch(error => console.error('Error connecting to server: ' + error));

    }


    render() {
        console.log(this.state.serverInfo.messages);

        return(
            <div>
                <CardinalNav />
                <ProductsCarousel />
                <InfoGrid />
                <br/>
                <CardinalInfo />
                <TrustedCompanies />
                <br/><br/>
                <CardinalFooter />
            </div>
        );
    }
}

export default Home;
