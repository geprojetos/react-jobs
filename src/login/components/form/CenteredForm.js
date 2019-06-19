import React, { Component } from 'react';

import './css/centerd-form.css';
import LoginForm from './LoginForm';

class CenteredForm extends Component {
    
    render() {
        const { props } = this.props;

        return (  
            <section className="centered-form bg-dark p-3">
                <div className="centered-form-wrapper bg-light p-3 rounded">
                    <LoginForm props={ props } />
                </div>
            </section>
        );
    }
}
 
export default CenteredForm;