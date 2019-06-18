import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/menu.css';
import appRoutes from '../../../app.routes';

class Menu extends Component {

    state = {
        visible: false
    };

    menuToogle = () => {

        this.setState({ visible: !this.state.visible })
    };
    
    render() { 
        
        return (  
            <header className="bg-dark">
                <nav className="navbar-dark navbar-light mb-2">
                    <div className="navbar container">
                        <Link className="navbar-brand" to="/">Jobs</Link>
                        <button className="navbar-toggler" type="button" onClick={ this.menuToogle } >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
    
                    <div className="navbar-collapse" onClick={ this.menuToogle }>
                        <ul className={ `navbar-nav menu-list bg-dark ${ this.state.visible ? 'menu-open' : 'menu-close' }` }>
                            {
                                appRoutes.map((item, indice) => {
                                    return(
                                        <li key={ indice } className="nav-item menu-item active mb-1">
                                            <Link className="nav-link p-3" to={ item.path }>
                                                { item.name }
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </nav>

                <div 
                    className={ `${ this.state.visible ? 'menu-overlay' : '' }` } 
                    onClick={ this.menuToogle }>
                </div>
            </header>
        );
    }
}
 
export default Menu;