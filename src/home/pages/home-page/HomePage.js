import React, { Component } from 'react';

import ListGroup from '../../components/list/ListGroup';
import Jumbotron from '../../../shared/components/jumbotron/Jumbotron';

class HomePage extends Component {
    
    render() { 
        return (
            <section>
                <Jumbotron title="Categorias" />
                <ListGroup />
            </section>
        );
    }
}
 
export default HomePage;