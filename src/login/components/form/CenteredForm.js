import React, { Component } from 'react';

import './css/centerd-form.css';
import LoginForm from './loginForm';

class CenteredForm extends Component {
    
    render() { 
        return (  
            <section className="centered-form bg-dark p-3">
                <div className="centered-form-wrapper bg-light p-3 rounded">
                    <LoginForm />
                </div>
            </section>
        );
    }
}
 
export default CenteredForm;