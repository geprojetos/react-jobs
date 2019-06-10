import React, { Component } from 'react';

import Jumbotron from '../../../shared/components/jumbotron/Jumbotron';
import JobsList from '../../components/jobs/JobsList';

class HomePage extends Component {
    
    render() { 
        return (
            <section className="container">
                <Jumbotron title="Vagas" />
                <JobsList />
            </section>
        );
    }
}
 
export default HomePage;