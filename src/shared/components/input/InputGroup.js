import React, { Component } from 'react';

class InputGroup extends Component {
    
    render() { 
        const { label, id, name, icon, type, idMsgErro, placeholder, msgValidation, value, onchange, classError } = this.props;

        return (  
            <div className="form-group">
                <label className="sr-only" htmlFor={ id }>{ label }</label>

                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-dark text-white rounded">
                            <i className={ `fas ${ icon }` }></i>
                        </div>
                    </div>
                    
                    <input 
                        type={ type } 
                        className="form-control" 
                        name={ name }
                        id={ id } 
                        aria-describedby={ idMsgErro } 
                        placeholder={ placeholder }
                        value={ value }
                        onChange={ onchange }
                    />
                </div>

                <small id={ idMsgErro } className={ `form-text text-danger ${ classError }` }>
                    { msgValidation }
                </small>
            </div>
        );
    }
}
 
export default InputGroup;