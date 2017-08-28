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

        fetch(SERVER_URL + 'sponsor/index' + query)
            .then(r => r.json())
            .then(json => this.setState({sponsorModel: json}))
            .catch(error => console.error('Error connecting to server: ' + error));

        fetch(SERVER_URL + 'school/index' + query)
            .then(r => r.json())
            .then(json => this.setState({schoolModel: json}))
            .catch(error => console.error('Error connecting to server: ' + error));

    }

    render() {
        if(!this.state.serverInfo){
            return <div></div>
        }
        if(this.state.serverInfo.messages.challengeList){
         return(
              <div className="container">

                      <ChallengeList challengeList={this.state.serverInfo.messages.challengeList} sponsorList={this.state.sponsorModel.messages.sponsorList} schoolList={this.state.schoolModel.messages.schoolList} />

                  <ChallengeForm sponsorList={this.state.sponsorModel.messages.sponsorList} schoolList={this.state.schoolModel.messages.schoolList} messages={this.state.serverInfo.messages.contact}/>

             </div>)
         }
        return(

            <div className="container">
                 <div id="ChallengeAppend" className="col-xs-12 col-md-6"/>
                {console.log(this.state.sponsorModel)}
                <ChallengeForm sponsorList={this.state.sponsorModel.messages.sponsorList} schoolList={this.state.schoolModel.messages.schoolList} messages={this.state.serverInfo.messages.contact} />
            </div>
        );
    }
}

export default Contact;
