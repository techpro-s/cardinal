import React, { Component } from 'react';
import CardinalNav from '../components/CardinalNav';
import CardinalFooter from '../components/CardinalFooter';
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
        console.log(this.state.serverInfo.messages);
        return(
            <div>
                <CardinalNav messages={this.state.serverInfo.messages.navbar}/>
                <MainPlatform messages={this.state.serverInfo.messages.main}/>
                <CourseOverview messages={this.state.serverInfo.messages.courseOverview}/>
                <PlatformFeatures messages={this.state.serverInfo.messages.platformFeatures}/>
                <CardinalFooter messages={this.state.serverInfo.messages.footer}/>
            </div>
        );
    }
}

export default Platform;
