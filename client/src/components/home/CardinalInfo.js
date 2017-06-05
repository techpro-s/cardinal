import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class CardinalInfo extends Component {
    render(){
        return (
            <Jumbotron className="text-center">
                <div className="container">
                    <h1>{this.props.messages.message}</h1>
                </div>
            </Jumbotron>
        );
    }
}

export default CardinalInfo;
