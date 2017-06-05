import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

class CardinalFooter extends Component {
    render(){
        return(
            <div>
                <hr />
                <Grid>
                    <footer>
                        <p>{this.props.messages}</p>
                    </footer>
                </Grid>
            </div>
        );
    }
}

export default CardinalFooter;
