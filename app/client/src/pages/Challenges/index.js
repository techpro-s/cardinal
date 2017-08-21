import React, { Component } from 'react';
import Cookies from 'universal-cookie';



import { SERVER_URL} from '../../config';
import ChallengeForm from "./ChallengeForm";
import ChallengeList from "./ChallengeList";
class Contact extends Component{

    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        const cookies = new Cookies();
        var query = "?lang=" + cookies.get('lang');

        fetch(SERVER_URL + 'challenge/index' + query)
            .then(r => r.json())
            .then(json => this.setState({serverInfo: json}))
            .catch(error => console.error('Error connecting to server: ' + error));

    }

    render() {
        if(!this.state.serverInfo){
            return <div></div>
        }
        if(this.state.serverInfo.messages.challengeList){
         return(
              <div className="container">

                      <ChallengeList challengeList={this.state.serverInfo.messages.challengeList}/>

                  <ChallengeForm messages={this.state.serverInfo.messages.contact}/>

             </div>)
         }
        return(

            <div className="container">
                 <div id="ChallengeAppend" className="col-xs-12 col-md-6"/>
                <ChallengeForm messages={this.state.serverInfo.messages.contact}/>
            </div>
        );
    }
}

export default Contact;
