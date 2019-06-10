import React, { Component } from 'react';
import ListItem from './ListItem';

class ListGroup extends Component {
    
    render() { 
        const array = ['cat 1', 'cat 2', 'cat 3'];

        return (  
            <ul className="list-group">
                {
                    array.map((item, indice) => {
                        return (
                            <ListItem 
                                key={ indice } 
                                item={ item }
                            />
                        )
                    })
                }
            </ul>
        );
    }
}
 
export default ListGroup;