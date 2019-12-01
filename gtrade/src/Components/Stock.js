import React, {Component} from 'react';

function Stock(props){
    return(
        
            //makes each stock symbol an option in the dropdown menu
            <option>
            
            {props.Symbol}
            
            </option>


    )
}
export default Stock;

