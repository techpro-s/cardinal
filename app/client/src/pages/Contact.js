import React, { Component } from 'react';
import Cookies from 'universal-cookie';

import ContactPage from '../components/contact/ContactPage';

import { SERVER_URL} from '../config';

class Contact extends Component{

    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        const cookies = new Cookies();
        var query = "?lang=" + cookies.get('lang');

        fetch(SERVER_URL + 'home/contact' + query)
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
                <ContactPage messages={this.state.serverInfo.messages.contact}/>
            </div>
        );
    }
}

export default Contact;
