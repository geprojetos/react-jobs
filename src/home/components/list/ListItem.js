import React, { Component } from 'react';

class ListItem extends Component {
    
    render() { 
        const { item } = this.props;

        return (  
            <li className="list-group-item">
                { item }

                <button type="button" className="close text-danger" aria-label="Close">
                    <i className="fas fa-trash-alt"></i>
                </button>

                <button type="button" className="close mr-2 text-primary" aria-label="Close">
                    <i className="far fa-edit"></i>
                </button>
            </li>
        );
    }
}
 
export default ListItem;