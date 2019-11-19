import React, {Component} from 'react';

function Stock(props){
    return(
        
            <div style={{width: 200, border: 'solid'}}>
            <p>Name: {props.Name}</p>
            <p>Symbol: {props.Symbol}</p>
            </div>
        
        

    )
}
export default Stock;