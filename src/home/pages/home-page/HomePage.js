import React, { Component } from 'react';

import Jumbotron from '../../../shared/components/jumbotron/Jumbotron';
import JobsList from '../../components/jobs/JobsList';

class HomePage extends Component {

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
                <Jumbotron title="Vagas" bg="bg-dark" color="text-white" />
                <JobsList jobs={ jobs } />
            </section>
        );
    }
}
 
export default HomePage;