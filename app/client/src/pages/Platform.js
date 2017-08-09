import React, { Component } from 'react';
import Cookies from 'universal-cookie';

import MainPlatform from '../components/platform/MainPlatform';
import CourseOverview from '../components/platform/CourseOverview';
import PlatformFeatures from '../components/platform/PlatformFeatures';
import { SERVER_URL} from '../config';

class Platform extends Component{

    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        const cookies = new Cookies();
        var query = "?lang=" + cookies.get('lang');

        fetch(SERVER_URL + 'home/platform' + query)
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
                <MainPlatform messages={this.state.serverInfo.messages.main}/>
                <CourseOverview messages={this.state.serverInfo.messages.courseOverview}/>
                <PlatformFeatures messages={this.state.serverInfo.messages.platformFeatures}/>
            </div>
        );
    }
}

export default Platform;
