import React, { Component } from 'react';
import Cookies from 'universal-cookie';



import { SERVER_URL} from '../../config';
import SchoolForm from "./SchoolForm";
import SchoolList from "./SchoolList";
class School extends Component{

    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        const cookies = new Cookies();
        var query = "?lang=" + cookies.get('lang');

        fetch(SERVER_URL + 'school/index' + query)
            .then(r => r.json())
            .then(json => this.setState({serverInfo: json}))
            .catch(error => console.error('Error connecting to server: ' + error));

    }

    render() {
        if(!this.state.serverInfo){
            return <div></div>
        }
        if(this.state.serverInfo.messages.schoolList){
         return(
              <div className="container">

                      <SchoolList schoolList={this.state.serverInfo.messages.schoolList}/>

                  <SchoolForm messages={this.state.serverInfo.messages.contact}/>

             </div>)
         }
        return(

            <div className="container">
<div id="SchoolAppend" className="col-xs-12 col-md-6"/>
                <SchoolForm messages={this.state.serverInfo.messages.contact}/>
            </div>
        );
    }
}

export default School;
