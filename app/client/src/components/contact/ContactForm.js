import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Alert,Row,Form,FormGroup,Col,FormControl,ControlLabel,Button} from 'react-bootstrap';
import { SERVER_URL} from '../../config';
class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();

        const {name, email, message} = this.state;

        if (!name || !email || !message) {
            console.warn("missing required field!");
            return;
        }
        axios.post(SERVER_URL+'/home/sendEmail', {
            name: name,
            email: email,
            message: message
        }).then(function(response)  {
            console.log(response);
            const alert=
                <Alert bsStyle="success">
                    {response.data.messages.success}
            </Alert>;

            ReactDOM.render(
                alert,
                document.getElementById('alertRow')
            );
        }).catch(function (error) {
            console.log(error);
        });
        this.setState({ name: '', email: '', message: ''});
    };
    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };
    handleMessageChange = (event) => {
        this.setState({ message: event.target.value });
    };

    render() {
        return (
       <div>
            <Row id="alertRow"/>
    <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup controlId="formHorizontalName">
            <Col componentClass={ControlLabel} sm={2}>
                Name
            </Col>
            <Col sm={10}>
                <FormControl  placeholder="Name" required onChange={ this.handleNameChange }/>
            </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
                Email
            </Col>
            <Col sm={10}>
                <FormControl type="email" placeholder="Email" required onChange={ this.handleEmailChange }/>
            </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalMessage">
            <Col componentClass={ControlLabel} sm={2}>
                Message
            </Col>
            <Col sm={10}>
                <FormControl required componentClass="textarea" placeholder="Message" onChange={this.handleMessageChange} />
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

export default ContactForm;