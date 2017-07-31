import React, { Component } from 'react';
import { Grid,Image} from 'react-bootstrap';
import banner from '../../images/banner_2.png'
class MainBanner extends Component {
    render(){
        return (
<Grid className="gridNoMarginNoHeight">
    <Image src={banner} responsive/>

</Grid>

    );
    }
    }

    export default MainBanner;