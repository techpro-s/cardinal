import React, { Component } from 'react';
import Cookies from 'universal-cookie';



import { SERVER_URL} from '../../config';
import SponsorForm from "./sponsorForm";

class Contact extends Component{

    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        const cookies = new Cookies();
        var query = "?lang=" + cookies.get('lang');

        fetch(SERVER_URL + 'sponsor/index' + query)
            .then(r => r.json())
            .then(json => this.setState({serverInfo: json}))
            .catch(error => console.error('Error connecting to server: ' + error));

    }

    render() {
        if(!this.state.serverInfo){
            return <div></div>
        }
        return(
            <div>
                <SponsorForm messages={this.state.serverInfo.messages.contact}/>
            </div>
        );
    }
}

export default Contact;
