import React, { Component } from 'react';

import ListGroup from '../../components/list/ListGroup';
import ApiService from '../../../shared/services/api/ApiService';
import Jumbotron from '../../../shared/components/jumbotron/Jumbotron';

const api = new ApiService();

class CategoriesListPage extends Component {
    
    state =  {
        categories: []
    };

    async componentDidMount() {

        const categories = await api.get('categories');
        
        this.setState({ categories: categories });
    };

    render() { 
        const { categories } = this.state;

        return (
            <section className="container">
                <Jumbotron title="Categorias" bg="bg-dark" color="text-white" />
                <ListGroup categories={ categories } />
            </section>
        );
    }
}
 
export default CategoriesListPage;