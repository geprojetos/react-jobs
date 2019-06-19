import React, { Component } from 'react';

import CenteredForm from '../../components/form/CenteredForm';

class LoginPage extends Component {
    
    render() { 
        return (  
            <CenteredForm props={ this.props } />
        );
    }
}
 
export default LoginPage;