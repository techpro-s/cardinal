import React, { Component } from 'react';
import { Carousel, Image, Grid, Row, Col, Button } from 'react-bootstrap';

import Cookies from 'universal-cookie';
import { SERVER_URL} from '../../config';
import ChallengeDisplay from '../../pages/Challenges/ChallengeDisplay'

class Challenges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages:this.props.messages
        };
    }
    componentDidMount() {
        const cookies = new Cookies();
        var query = "?lang=" + cookies.get('lang');

        fetch(SERVER_URL + 'challenge/index' + query)
            .then(r => r.json())
            .then(json => this.setState({serverInfo: json}))
            .catch(error => console.error('Error connecting to server: ' + error));
    }
    render(){


                    if(!this.state.serverInfo){
                    return <div></div>
                }
                    if(this.state.serverInfo.messages.challengeList){
                    return(
                        <div style={{paddingTop:"7%"}}>
                    <h4 className="text-center">{this.props.messages.title}</h4>
                    <Carousel style={{height:"600px"}}>

                        {this.state.serverInfo.messages.challengeList.map(function(challenge, i) {
                            return ( <Carousel.Item><ChallengeDisplay key={i} challenge={challenge} messages={this.state.messages}/></Carousel.Item>
                            )},this)}



                    </Carousel>
                        </div>
                    )
                }
                    return(

                    <div className="container">
                       No Active Challenges
                    </div>
                    );



    }
}

export default Challenges;
