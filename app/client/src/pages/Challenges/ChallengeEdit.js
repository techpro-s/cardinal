import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Datetime from 'react-datetime';
import { SERVER_URL} from '../../config';
import {Checkbox,Alert,Row,Form,FormGroup,Col,FormControl,ControlLabel,Thumbnail,Button} from 'react-bootstrap';


class ChallengeEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.challenge.id,
            title: props.challenge.title,
            description: props.challenge.description,
            startDate: props.challenge.startDate,
            endDate:props.challenge.endDate,
            PDFUrl:props.challenge.PDFUrl,
            enable:props.challenge.enable,
            backGroundImg:props.challenge.backGroundImg,
            sponsors:props.challenge.sponsors

        };

    }
    handleDelete=(event) =>{
        event.preventDefault();

        const {id,title} = this.state;

        if (!id ) {
            console.warn("missing required field!");
            return;
        }
        axios.delete(SERVER_URL+'challenge/delete/'+id).then(function(response) {
            console.log(response);
            const deleted=<div  className="col-xs-12 col-md-6"><Alert bsStyle="success">
                {title} has been deleted</Alert></div>;
            ReactDOM.render(deleted,
                document.getElementById('challenge'+id)
            );

        }).catch(function (error) {
            if (error.response){
                const alert=
                    <Alert bsStyle="danger">
                        {error.response.data.message}
                    </Alert>;

                ReactDOM.render(
                    alert,
                    document.getElementById('alertRow'+id)
                );
            }
            console.log(error);
        });


    };


    handleSubmit = (event) => {
        event.preventDefault();

        const {id,title, description,startDate,endDate,PDFUrl,backGroundImg,enable,sponsors} = this.state;

        if (!title || !description) {
            console.warn("missing required field!");
            return;
        }
        axios.put(SERVER_URL + 'challenge/update', {id:id,
            title: title,
            description: description,
            startDate: startDate,
            endDate:endDate,
            backGroundImg:backGroundImg,
            PDFUrl:PDFUrl,
            enable:enable,
            sponsors:sponsors
        }).then(function (response) {
            console.log(response);
            const alert =
                <Alert bsStyle="success">
                    {response.data.title} has been updated

                </Alert>;

            ReactDOM.render(
                alert,
                document.getElementById('alertRow')
            );
        }).catch(function (error) {
            if (error.response) {
                const alert =
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
        return (<div>
                <div id={'challenge'+this.props.challenge.id}>


                    <div  className="col-xs-12 col-md-6">
                        <Thumbnail>
                        <Row id={'alertRow'+this.props.challenge.id} />

                        <Form horizontal onSubmit={this.handleSubmit}>

                                <FormGroup controlId="formHorizontalId" hidden>
                                    <FormControl placeholder='id' defaultValue={this.props.challenge.id} required/>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalTitle">
                                    <Col componentClass={ControlLabel} md={2}>
                                        Title
                                    </Col>
                                    <Col md={10}>
                                        <FormControl  placeholder='Title' defaultValue={this.props.challenge.title} required onChange={ this.handleTitleChange }/>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalDescription">
                                    <Col componentClass={ControlLabel} md={2}>
                                        Description
                                    </Col>
                                    <Col md={10}>
                                        <FormControl componentClass="textarea" placeholder='Description' defaultValue={this.props.challenge.description} required onChange={ this.handleDescriptionChange }/>
                                    </Col>
                                </FormGroup>
                                <Row>
                                    <Col md={6}>
                                <FormGroup controlId="formHorizontalStartDate">
                                    <Col componentClass={ControlLabel} md={3}>
                                        Start Date
                                    </Col>
                                    <Col md={9}>
                                        <Datetime  placeholder="Please select a date" defaultValue={this.props.challenge.startDate} required onChange={ this.handleStartDateChange }/>
                                    </Col>
                                </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                <FormGroup controlId="formHorizontalEndDate">
                                    <Col componentClass={ControlLabel} md={3}>
                                        Start Date
                                    </Col>
                                    <Col md={9}>
                                        <Datetime  placeholder="Please select a date" defaultValue={this.props.challenge.endDate} required onChange={ this.handleEndDateChange }/>
                                    </Col>
                                </FormGroup></Col>
                                </Row>
                            <Row>
                                <Col md={6}>
                                <FormGroup controlId="formHorizontalPDFUrl">
                                    <Col componentClass={ControlLabel} md={3}>
                                        PDF Url
                                    </Col>
                                    <Col md={9}>
                                        <FormControl  placeholder='PDF Url' defaultValue={this.props.challenge.PDFUrl} required onChange={ this.handlePDFURlChange }/>
                                    </Col>
                                </FormGroup>
                                </Col>
                                <Col md={6}>
                                <FormGroup controlId="formHorizontalImageUrl">
                                    <Col componentClass={ControlLabel} md={3}>
                                         ImageUrl
                                    </Col>
                                    <Col md={9}>
                                        <FormControl  placeholder='Background ImageUrl' defaultValue={this.props.challenge.backGroundImg} required onChange={ this.handleImageURLChange }/>
                                    </Col>
                                </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                <FormGroup controlId="formControlsSelectMultipleSponsor">
                                    <Col componentClass={ControlLabel} md={3}>Sponsors </Col>
                                    <Col md={9}>
                                    <FormControl componentClass="select" multiple onChange={ this.handleSponsorChange }>
                                        {this.props.sponsorList.map(function(sponsor, i) {
                                            let options=this.props.challenge.sponsors;
                                            for (let y = 0, l = options.length; y < l; y++) {
                                                if (options[y].id===sponsor.id) {
                                                    return (<option key={sponsor.id} selected="selected" value={sponsor.id}>{sponsor.name}</option>)
                                                }
                                            }
                                            return (<option key={sponsor.id} value={sponsor.id}>{sponsor.name}</option>)},this)}
                                    </FormControl>
                                    </Col>
                                </FormGroup>
                                </Col>
                                <Col md={6}>
                                <FormGroup>
                                    <Col smOffset={2} sm={10}>
                                        <Checkbox defaultChecked={this.props.challenge.enable} onChange={this.handleEnableChange}>Enable</Checkbox>
                                    </Col>
                                </FormGroup>

                                <Col mdOffset={1} md={2} xs={3}>
                                    <Button className="btn-success " type="submit">
                                        Update
                                    </Button>
                                </Col>
                                </Col>
                            </Row>
                        </Form>

                            {/*<Col >*/}
                                {/*<Image src={this.props.challenge.backGroundImg} className="imageSponsor " responsive/>*/}
                            {/*</Col>*/}
                            <Row >
                                <Form horizontal onSubmit={this.handleDelete}>
                                    <FormGroup controlId="formHorizontalId" hidden>
                                        <FormControl placeholder='id' defaultValue={this.props.challenge.id} required/>
                                    </FormGroup>
                                    <Button className="btn-danger fixDanger " type="submit">
                                        Delete
                                    </Button>
                                </Form>
                            </Row>


                        </Thumbnail>
                    </div>

                </div>
            </div>
        );
    }
}

export default ChallengeEdit;