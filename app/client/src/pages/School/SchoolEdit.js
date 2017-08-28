import React, {Component} from 'react';

import {Alert, Row, Form, FormGroup, Col, FormControl, ControlLabel, Button, Image} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {SERVER_URL} from '../../config';

class SchoolEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.school.id,
            name: props.school.name,
            imageUrl: props.school.imageUrl
        };

    }
    handleDelete=(event) =>{
        event.preventDefault();

        const {id,name} = this.state;

        if (!id ) {
            console.warn("missing required field!");
            return;
        }
        axios.delete(SERVER_URL+'school/delete/'+id).then(function(response) {
            console.log(response);
            const deleted=<div  className="col-xs-12 col-md-6"><Alert bsStyle="success">
                {name} has been deleted</Alert></div>;
            ReactDOM.render(deleted,
                document.getElementById('school'+id)
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

        const {id,name, imageUrl} = this.state;

        if (!name || !imageUrl) {
            console.warn("missing required field!");
            return;
        }
        axios.put(SERVER_URL + 'school/update', {id:id,
            name: name,
            imageUrl: imageUrl
        }).then(function (response) {
            console.log(response);
            const alert =
                <Alert bsStyle="success">
                    {response.data.name} has been updated

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
    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    };
    handleimageURlChange = (event) => {
        this.setState({imageUrl: event.target.value});
    };

    render() {
        return (<div>
            <div id={'school'+this.props.school.id}>


                <div  className="col-xs-12 col-md-6">
                    <Row id={'alertRow'+this.props.school.id} />
                    <Col md={3} xs={3}>
                        <Col >
                        <Image src={this.props.school.imageUrl} className="imageSponsor " responsive/>
                    </Col>
                        <Col >
                            <Form horizontal onSubmit={this.handleDelete}>
                    <FormGroup controlId="formHorizontalId" hidden>
                        <FormControl placeholder='id' defaultValue={this.props.school.id} required/>
                    </FormGroup>
                    <Button className="btn-danger fixDanger " type="submit">
                        Delete
                    </Button>
                </Form>
                        </Col>

                </Col>
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <Row>
                            <FormGroup controlId="formHorizontalId" hidden>
                                <FormControl placeholder='id' defaultValue={this.props.school.id} required/>
                            </FormGroup>

                            <Col md={8} xs={9}>
                                <Row>
                                    <FormGroup controlId="formHorizontalName">
                                        <Col componentClass={ControlLabel} md={5} xs={4}>
                                            name
                                        </Col>
                                        <Col md={7} xs={8}>
                                            <FormControl defaultValue={this.props.school.name} placeholder='name' required
                                                         onChange={this.handleNameChange}/>
                                        </Col>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup controlId="formHorizontalImageUrl">
                                        <Col componentClass={ControlLabel} md={5} xs={4}>
                                            image Url
                                        </Col>
                                        <Col md={7} xs={8}>
                                            <FormControl defaultValue={this.props.school.imageUrl} placeholder='imageUrl'
                                                         required onChange={this.handleimageURlChange}/>
                                        </Col>
                                    </FormGroup>
                                </Row>
                            </Col>
                            <Col md={2} xs={3}>
                                <Button className="btn-success " type="submit">
                                    Update
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                </div>

    </div>
            </div>
        );
    }
}

export default SchoolEdit;