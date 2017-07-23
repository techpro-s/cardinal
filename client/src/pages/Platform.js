import CardinalNav from '../components/CardinalNav';
import CardinalFooter from '../components/CardinalFooter';

class Platform extends Component{

    constructor() {
        super();
        this.state = {
            serverInfo: {}
        }
    }

    componentDidMount() {
        const search = this.props.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search);
        const lang = params.get('lang'); // bar
        var query = lang != null ? "?lang=" + lang : "";
        fetch(SERVER_URL + 'home/platform' + query)
            .then(r => r.json())
            .then(json => this.setState({serverInfo: json}))
            .catch(error => console.error('Error connecting to server: ' + error));

    }

    render() {
        if(!this.state.serverInfo){
            return <div></div>
        }
        console.log(this.state.serverInfo.messages.navbar);
        return(
            <div>
                <CardinalNav messages={this.state.serverInfo.messages.navbar}/>

                <CardinalFooter messages={this.state.serverInfo.messages.footer}/>
            </div>
        );
    }
}

export default Platform;