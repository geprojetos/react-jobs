import React, { Component } from 'react';

import Jumbotron from '../../../shared/components/jumbotron/Jumbotron';
import JobsList from '../../components/jobs/JobsList';
import ApiService from '../../../shared/services/api/ApiService';
const teste = new ApiService();

class HomePage extends Component {
    
    async componentDidMount() {
        const api = await teste.get('jobs');
        console.log(api);
        
    };

    render() { 
        const jobs = [
            {
                "title": "title 1",
                "desc": "desc 1"
            },
            {
                "title": "title 2",
                "desc": "desc 2"
            }
        ];

        return (
            <section className="container">
                <Jumbotron title="Vagas" />
                <JobsList jobs={ jobs } />
            </section>
        );
    }
}
 
export default HomePage;