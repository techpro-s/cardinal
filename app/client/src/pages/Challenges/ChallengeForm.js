import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Datetime from 'react-datetime';

import {Checkbox,Alert,Row,Form,FormGroup,Col,FormControl,ControlLabel,Button} from 'react-bootstrap';
import ChallengeEdit from './ChallengeEdit';
import { SERVER_URL} from '../../config';
class ChallengeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sponsorList:this.props.sponsorList,
            title: '',
            description: '',
            startDate: '',
            endDate:'',
            PDFUrl:'',
            enable:'',
            backGroundImg:'',
            sponsors:{}

        };
    }




    handleSubmit = (event) => {
        event.preventDefault();

        const {title, description,startDate,endDate,PDFUrl,backGroundImg,enable,sponsors,sponsorList} = this.state;

        if (!title || !description ) {
            console.warn("missing required field!");
            return;
        }
        axios.post(SERVER_URL+'challenge/save', {
            title: title,
            description: description,
            startDate: startDate,
            endDate:endDate,
            PDFUrl:PDFUrl,
            backGroundImg:backGroundImg,
            enable:enable,
            sponsors:sponsors
        }).then(function(response)  {
            console.log(response);
            const alert=
                <Alert bsStyle="success">
                    {response.data.title} has been saved

                </Alert>;

            ReactDOM.render(
                alert,
                document.getElementById('alertRow')
            );
            const challenge=<div>
                <ChallengeEdit key={response.data.id} challenge={response.data} sponsorList={sponsorList}/><div id="ChallengeAppend"/>
            </div>;
            ReactDOM.render(
                challenge,
                document.getElementById('ChallengeAppend')
            );
            document.getElementById('ChallengeAppend').setAttribute('id',response.data.id);
        }).catch(function (error) {
            if (error.response){
                const alert=
                    <Alert bsStyle="danger">
                        {error.response.data.message}
                    </Alert>;

                ReactDOM.render(
                    alert,
                    document.getElementById('alertRow')
                );
            }
            console.log(error);
        });
       // this.setState({ name: '', email: ''});
    };
    handleTitleChange = (event) => {
        this.setState({ title: event.target.value });
    };
    handleDescriptionChange = (event) => {
        this.setState({ description: event.target.value });
    };
    handleStartDateChange = (event) => {
        this.setState({ startDate: event });
    };
    handleEndDateChange = (event) => {
        this.setState({ endDate: event });
    };
    handlePDFURlChange = (event) => {
        this.setState({ PDFUrl: event.target.value });
    };
    handleEnableChange = (event) => {
    this.setState({ enable: event.target.checked });
};
    handleImageURLChange=(event) => {
    this.setState({ backGroundImg: event.target.value });
};
    handleSponsorChange =(event)=>{
        let options = event.target.options;
        let value = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        this.setState({ sponsors: value });
    };

    render() {
        return (
            <div key={this.props.key} className="col-xs-12 col-md-6">
                <Row id="alertRow"/>
                <Row>
                    <h3> New Challenge </h3>
                </Row>
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formHorizontalTitle">
                        <Col componentClass={ControlLabel} sm={2}>
                            Title
                        </Col>
                        <Col sm={10}>
                            <FormControl  placeholder='Title' required onChange={ this.handleTitleChange }/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalDescription">
                        <Col componentClass={ControlLabel} sm={2}>
                            Description
                        </Col>
                        <Col sm={10}>
                            <FormControl componentClass="textarea" placeholder='Description' required onChange={ this.handleDescriptionChange }/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalStartDate">
                        <Col componentClass={ControlLabel} sm={2}>
                            Start Date
                        </Col>
                        <Col sm={10}>
                            <Datetime  placeholder="Please select a date" required onChange={ this.handleStartDateChange }/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalEndDate">
                        <Col componentClass={ControlLabel} sm={2}>
                            Start Date
                        </Col>
                        <Col sm={10}>
                            <Datetime  placeholder="Please select a date" required onChange={ this.handleEndDateChange }/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPDFUrl">
                        <Col componentClass={ControlLabel} sm={2}>
                            PDF Url
                        </Col>
                        <Col sm={10}>
                            <FormControl  placeholder='PDF Url' required onChange={ this.handlePDFURlChange }/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPDFUrl">
                        <Col componentClass={ControlLabel} sm={2}>
                            Background ImageUrl
                        </Col>
                        <Col sm={10}>
                            <FormControl  placeholder='Background ImageUrl' required onChange={ this.handleImageURLChange }/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formControlsSelectMultipleSponsor">
                        <ControlLabel>Sponsors select </ControlLabel>
                        <FormControl componentClass="select" multiple onChange={ this.handleSponsorChange }>
                               {this.props.sponsorList.map(function(sponsor, i) {
                                return (<option key={sponsor.id} value={sponsor.id}>{sponsor.name}</option>)})}
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox onChange={this.handleEnableChange}>Enable</Checkbox>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button className="btn-info COverview" type="submit">
                                Send
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default ChallengeForm;