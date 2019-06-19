import React, { Component } from 'react';

import Jumbotron from '../../../shared/components/jumbotron/Jumbotron';
import InputGroup from '../../../shared/components/input/InputGroup';
import ApiService from '../../../shared/services/api/ApiService';

const apiService = new ApiService();

class LoginForm extends Component {
    
    state = {
        login: '',
        password: '',
        loginRequired: true,
        passwordRequired: true,
        errorValidation: ''
    };

    handleSubmit = async e => {

        e.preventDefault();

        const isValid = this.validateForm(this.state);
        const { props } = this.props;
        
        if(!isValid) return;
        
        const response = await apiService.post('/sigin', this.state);
        
        if(response.statusText) {
            
            this.setState({ errorValidation: 'Login ou senha inválidos' });
            return;
        };

        props.history.push('/');
    };

    changeInput = e => {

        this.setState({ [e.target.name ]: e.target.value });
    };

    validateForm = (...props) => {

        const { login, password } = props[0];

        this.setState({ loginRequired: true });
        this.setState({ passwordRequired: true });


        if(login === '') {
            this.setState({ loginRequired: false });
            return false;
        } 
        
        if(password === '') {
            this.setState({ passwordRequired: false });
            return false;
        }

        return true;
    };

    render() { 
        const { login, password, loginRequired, passwordRequired, errorValidation } = this.state;

        return (
            <section>
                <Jumbotron title="Jobs Login" bg="bg-dark" color="text-white" />
                
                {
                    errorValidation
                    ? <div className="alert alert-danger text-center">{ errorValidation }</div>
                    : ''
                }

                <form onSubmit={ this.handleSubmit.bind(this) }>
                    <fieldset>
                        <InputGroup 
                            label="Digite o seu login"
                            name="login"
                            id="login"
                            icon="fa-user"
                            type="text"
                            idMsgErro="loginMsgErro"
                            placeholder="Digite o seu login"
                            msgValidation="Login obrigatório"
                            onchange={ this.changeInput.bind(this) }
                            value={ login }
                            classError={ !loginRequired ? 'alert alert-danger' : '' }
                        />

                        <InputGroup 
                            label="Digite a sua senha"
                            name="password"
                            id="password"
                            icon="fa-unlock-alt"
                            type="password"
                            idMsgErro="passwordMsgErro"
                            placeholder="Digite a sua senha"
                            msgValidation="Senha obrigatória"
                            onchange={ this.changeInput.bind(this) }
                            value={ password }
                            classError={ !passwordRequired ? 'alert alert-danger' : '' }
                        />
                    </fieldset>

                    <fieldset>
                        <button type="submit" className="btn btn-info btn-block">Entrar</button>
                    </fieldset>
                </form>
            </section>  
        );
    }
}
 
export default LoginForm;