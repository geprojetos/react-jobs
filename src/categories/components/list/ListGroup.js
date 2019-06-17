import React, { Component } from 'react';

import ListItem from './ListItem';

class ListGroup extends Component {

    render() { 
        const { categories } = this.props;

        return (  
            <ul className="list-group">
                {
                   categories.map((cat, indice) => {
                        return (
                            <ListItem 
                                key={ indice } 
                                cat={ cat.name }
                            />
                        )
                    })
                }
            </ul>
        );
    }
}
 
export default ListGroup;