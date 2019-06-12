import React, { Component } from 'react';

import ListGroup from '../../components/list/ListGroup';
import ApiService from '../../../shared/services/api/ApiService';
const api = new ApiService();

class CategoriesListPage extends Component {
    
    state =  {
        categories: []
    };

    async componentDidMount() {

        const categories = await api.get('jobs');
        
        this.setState({ categories });
    };

    render() { 
        const { categories } = this.state;

        return (  
            <ListGroup categories={ categories } />
        );
    }
}
 
export default CategoriesListPage;