import React, { Component } from 'react';
import CardinalFooter from '../../components/CardinalFooter';
import ChallengesList from '../../components/CMS/ChallengesList';
import LeftNav from '../../components/CMS/LeftNav';
import { SERVER_URL, CLIENT_VERSION, REACT_VERSION } from '../../config';
import 'whatwg-fetch';

class Home extends Component{

    constructor() {
        super();
        this.state = {
            List:{},
            clientInfo: {
                version: CLIENT_VERSION,
                react: REACT_VERSION
            }
        }
    }

    componentDidMount() {
        //Todo Encontrar como pasar la lista a sus respectivos componentes
        /*const search = this.props.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search);
        const lang = params.get('lang'); // bar
        var query = lang != null ? "?lang=" + lang : "";
        fetch(SERVER_URL + 'application' + query)
            .then(r => r.json())
            .then(json => this.setState({receptor: json}))
            .catch(error => console.error('Error connecting to server: ' + error));*/

    }

    render() {
        const List = this.state.List;
        if(!this.state.serverInfo){
            return <div></div>
        }
        console.log(this.state.serverInfo.messages.navbar);
        return(
            <div>
                <div>
                    <LeftNav/>
                </div>
                <div>
                    <ChallengesList List={List}/>
                </div>
                <CardinalFooter messages={this.state.serverInfo.messages.copyright}/>
            </div>


        );
    }
}

export default Home;