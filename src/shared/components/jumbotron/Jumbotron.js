import React, { Component } from 'react';

class Jumbotron extends Component {
    
    render() { 
        const { title, subtitle, bg, color } = this.props;

        return (  
            <header className={`jumbotron text-center ${ bg } ${ color }`}>
                <h1>{ title }</h1>
                { subtitle ? <h3>{ subtitle }</h3>: '' }
            </header>
        );
    }
}
 
export default Jumbotron;