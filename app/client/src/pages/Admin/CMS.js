import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import CardinalFooter from '../../components/CardinalFooter';
import AdminNavbar from '../../components/CMS/AdminNavbar';
import { SERVER_URL, CLIENT_VERSION, REACT_VERSION } from '../../config';
import 'whatwg-fetch';

class Cms extends Component{

    constructor() {
        super();
        this.state = {
            clientInfo: {
                version: CLIENT_VERSION,
                react: REACT_VERSION
            }
        }
    }

    /*
    <div>
        <BrowserRouter>
            <div>
                <AdminNavbar messages={this.state.serverInfo.messages.navbar}/>
                <Switch>
                    <Route path="/Admin/" componet={CMS}/>
                    <Route path="/Admin/CMS/Challenge" componet={CMS}/>
                    <Route path="/Admin/CMS/Events" componet={CMS}/>
                    <Route path="/Admin/CMS/Users" componet={CMS}/>
                </Switch>
                <CardinalFooter messages={this.state.serverInfo.messages.footer}/>
            </div>
        </BrowserRouter>
    </div>
    }*/

    componentDidMount() {
        console.log("ALGO!!!")
        const cookies = new Cookies();

        const search = this.props.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search);
        const lang = params.get('lang'); // bar

        if (lang != null){
            cookies.set('lang', lang, { path: '/' });
        }else{
            if(cookies.get('lang') == null){
                cookies.set('lang', 'en', { path: '/' });
            }
        }

        var query = "?lang=" + cookies.get('lang');
        fetch(SERVER_URL + 'admin/index' + query)
          .then(r => r.json())
          .then(json => this.setState({serverInfo: json}))
          .catch(error => console.error('Error connecting to server: ' + error));

    }

    render() {
        if(!this.state.serverInfo){
            return <div>Hello</div>
        }
        console.log(this.state.serverInfo.messages.navbar);
        return(
            <div>
                <AdminNavbar messages={this.state.serverInfo.messages.navbar}/>
                <CardinalFooter messages={this.state.serverInfo.messages.footer}/>
            </div>


        );
    }
}

export default Cms;
