import React, { Component } from 'react';

import Jobs from './Jobs';

class JobsList extends Component {
    
    render() { 
        const { jobs } = this.props;
        
        return(
            jobs.map((job, indice) => <Jobs key={ indice } jobs={ job } />)
        )
        
    }
}
 
export default JobsList;