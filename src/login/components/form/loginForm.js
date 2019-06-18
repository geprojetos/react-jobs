import React, { Component } from 'react';

import Jumbotron from '../../../shared/components/jumbotron/Jumbotron';

class LoginForm extends Component {
    
    render() { 
        return (
            <section>
                <Jumbotron title="Jobs Login" bg="bg-dark" color="text-white" />
                
                <form>
                    <fieldset>
                        <div className="form-group">
                            <label class="sr-only" htmlFor="login">Login de usuário</label>

                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text bg-dark text-white rounded">
                                        <i class="fas fa-user"></i>
                                    </div>
                                </div>
                                
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="login" 
                                    aria-describedby="loginMsgErro" 
                                    placeholder="Digite o seu login" 
                                />
                            </div>

                            <small id="loginMsgErro" className="form-text text-danger">Login obrigatório.</small>
                        </div>

                        <div className="form-group">
                            <label class="sr-only" htmlFor="password">Senha</label>

                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text bg-dark text-white rounded">
                                        <i class="fas fa-unlock-alt"></i>
                                    </div>
                                </div>
                                
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    aria-describedby="passwordMgsErro" 
                                    placeholder="Digite a sua senha" 
                                />
                            </div>

                            <small id="passwordMgsErro" className="form-text text-danger">Senha obrigatória.</small>
                        </div>
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