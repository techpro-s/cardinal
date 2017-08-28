import React, {Component} from 'react';

import {Row} from 'react-bootstrap';
import SchoolEdit from './SchoolEdit'
class SchoolList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return (
            <div >
                <Row id="alertRow"/>

                {this.props.schoolList.map(function(school, i) {
                    return (<SchoolEdit key={i} school={school}/>)})}
                    <div id="SchoolAppend"/>
            </div>
        );
    }
}

export default SchoolList;