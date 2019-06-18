import React, { Component } from 'react';

import Jumbotron from '../../../shared/components/jumbotron/Jumbotron';
import InputGroup from '../../../shared/components/input/InputGroup';

class LoginForm extends Component {
    
    render() { 
        return (
            <section>
                <Jumbotron title="Jobs Login" bg="bg-dark" color="text-white" />
                
                <form>
                    <fieldset>
                        <InputGroup 
                            label="Digite o seu login"
                            id="login"
                            icon="fa-user"
                            type="text"
                            idMsgErro="loginMsgErro"
                            placeholder="Digite o seu login"
                            msgValidation="Login obrigatório"
                        />

                        <InputGroup 
                            label="Digite a sua senha"
                            id="password"
                            icon="fa-unlock-alt"
                            type="password"
                            idMsgErro="passwordMsgErro"
                            placeholder="Digite a sua senha"
                            msgValidation="Senha obrigatória"
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