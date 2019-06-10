import React, { Component } from 'react';

class Jobs extends Component {
    
    render() { 
        const { title, desc } = this.props.jobs;
        const { bg, color } = this.props;

        return (  
            <div className="card mt-4">
                <header className={`card-header ${ bg } ${ color }`}>
                    { title }
                </header>

                <div className="card-body">
                    <div className="text-right">
                        <button type="button" className="btn btn-primary mr-1">
                            <i className="far fa-edit text-white"></i>
                        </button>

                        <button type="button" className="btn btn-danger">
                            <i className="fas fa-trash-alt text-white"></i>
                        </button>
                    </div>

                    <p className="card-text">{ desc }</p>
                </div>

            </div>
        );
    }
}
 
export default Jobs;