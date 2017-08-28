import React, {Component} from 'react';

import {Row} from 'react-bootstrap';
import ChallengeEdit from './ChallengeEdit'
class ChallengeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sponsorList:this.props.sponsorList,
            schoolList:this.props.schoolList,

        };
    }



    render() {
        return (
            <div >
                <Row id="alertRow"/>

                {this.props.challengeList.map(function(challenge, i) {
                    return (<ChallengeEdit key={i} challenge={challenge} sponsorList={this.state.sponsorList} schoolList={this.state.schoolList}/>)},this)}
                    <div id="ChallengeAppend"/>
            </div>
        );
    }
}

export default ChallengeList;