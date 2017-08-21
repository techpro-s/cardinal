import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Datetime from 'react-datetime';
import {Alert,Row,Form,FormGroup,Col,FormControl,ControlLabel,Button} from 'react-bootstrap';
//import SponsorEdit from './SponsorEdit';
import { SERVER_URL} from '../../config';
class ChallengeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: ''
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();

        const {name, imageUrl} = this.state;

        if (!name || !imageUrl ) {
            console.warn("missing required field!");
            return;
        }
        axios.post(SERVER_URL+'sponsor/save', {
            name: name,
            imageUrl: imageUrl
        }).then(function(response)  {
            console.log(response);
            const alert=
                <Alert bsStyle="success">
                    {response.data.name} has been saved

                </Alert>;

            ReactDOM.render(
                alert,
                document.getElementById('alertRow')
            );
            const sponsor=<div>
                {/*<SponsorEdit key={response.data.id} sponsor={response.data}/><div id="SponsorAppend"/>*/}
            </div>;
            ReactDOM.render(
                sponsor,
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
        this.setState({ name: '', email: ''});
    };
    handleTitleChange = (event) => {
        this.setState({ title: event.target.value });
    };
    handleDescriptionChange = (event) => {
        this.setState({ description: event.target.value });
    };
    handleStartDateChange = (event) => {
        this.setState({ StartDate: event.target.value });
    };
    handleEndDateChange = (event) => {
        this.setState({ EndDate: event.target.value });
    };
    handlePDFURlChange = (event) => {
        this.setState({ PDFUrl: event.target.value });
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
                            <FormControl rcomponentClass="textarea" placeholder='Description' required onChange={ this.handleDescriptionChange }/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalStartDate">
                        <Col componentClass={ControlLabel} sm={2}>
                            Start Date
                        </Col>
                        <Col sm={10}>
                            <Datetime  defaultText="Please select a date" required onChange={ this.handleStartDateChange }/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalEndDate">
                        <Col componentClass={ControlLabel} sm={2}>
                            Start Date
                        </Col>
                        <Col sm={10}>
                            <Datetime  defaultText="Please select a date" required onChange={ this.handleEndDateChange }/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPDFUrl">
                        <Col componentClass={ControlLabel} sm={2}>
                            image Url
                        </Col>
                        <Col sm={10}>
                            <FormControl  placeholder='PDF Url' required onChange={ this.handlePDFURlChange }/>
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