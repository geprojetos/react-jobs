import React, { Component } from 'react';

import Jobs from './Jobs';

class JobsList extends Component {
    
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
        ]
        
        return(
            jobs.map((job, indice) => <Jobs key={ indice } jobs={ job } />)
        )
        
    }
}
 
export default JobsList;