import React, {Component} from 'react';

import {Row} from 'react-bootstrap';
import SponsorEdit from './SponsorEdit'
class SponsorList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return (
            <div >
                <Row id="alertRow"/>

                {this.props.sponsorList.map(function(sponsor, i) {
                    return (<SponsorEdit key={i} sponsor={sponsor}/>)})}
                    <div id="SponsorAppend"/>
            </div>
        );
    }
}

export default SponsorList;