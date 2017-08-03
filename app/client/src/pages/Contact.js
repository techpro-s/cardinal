import React, { Component } from 'react';
import ContactPage from '../components/contact/ContactPage';

import { SERVER_URL} from '../config';

class Contact extends Component{

    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        const search = this.props.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search);
        const lang = params.get('lang'); // bar
        var query = lang != null ? "?lang=" + lang : "";
        fetch(SERVER_URL + 'home/platform' + query)
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
                <ContactPage/>
            </div>
        );
    }
}

export default Contact;
