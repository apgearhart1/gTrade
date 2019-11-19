import React, {Component} from 'react';
import './SearchBox.css';

function SearchBox(props){
    return(
        <div id="box">

            <input onChange={props.handleInput} type='text'></input>
        </div>
    )
}

export default SearchBox;