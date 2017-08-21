import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Alert,Row,Form,FormGroup,Col,FormControl,ControlLabel,Button} from 'react-bootstrap';
import SponsorEdit from './SponsorEdit';
import { SERVER_URL} from '../../config';
class SponsorForm extends Component {
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
            const sponsor=<div><SponsorEdit key={response.data.id} sponsor={response.data}/><div id="SponsorAppend"/></div>;
            ReactDOM.render(
                sponsor,
                document.getElementById('SponsorAppend')
            );
            document.getElementById('SponsorAppend').setAttribute('id',response.data.id);
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
    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };
    handleimageURlChange = (event) => {
        this.setState({ imageUrl: event.target.value });
    };


    render() {
        return (
            <div key={this.props.key} className="col-xs-12 col-md-6">
                <Row id="alertRow"/>
                <Row>
                <h3> New Sponsor</h3>
                </Row>
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            name
                        </Col>
                        <Col sm={10}>
                            <FormControl  placeholder='name' required onChange={ this.handleNameChange }/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalImageUrl">
                        <Col componentClass={ControlLabel} sm={2}>
                            image Url
                        </Col>
                        <Col sm={10}>
                            <FormControl  placeholder='imageUrl' required onChange={ this.handleimageURlChange }/>
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

export default SponsorForm;