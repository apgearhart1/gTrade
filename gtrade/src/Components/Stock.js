import React, {Component} from 'react';
import StocksJSON from './stocks.json';
function Stock(props){
    return(

            <option>
            
            {props.Symbol}
            
            </option>
        

    )
}
export default Stock;

//<div style={{width: 200, border: 'solid'}}>
//</div>