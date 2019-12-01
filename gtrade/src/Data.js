import React from 'react';
import './Data.css';
import axios from 'axios';

class Data extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            Symbol: this.props.location.state.Symbol
        }

        // let config = {
        // headers: {
        //     header1: value,
        // }
        // }
        
        // let data = {
        // 'HTTP_CONTENT_LANGUAGE': self.language
        // }
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
        axios.get("https://protected-ravine-04165.herokuapp.com/trends/" + this.state.Symbol)
        .then((response) => {
            console.log(response);
            alert(response);
        })
        alert(this.state.Symbol);
        //alert("1\n2");
    }

    
    render() {
        
        return <h1>This is the Data screen</h1>
        
      }
}

export default Data;