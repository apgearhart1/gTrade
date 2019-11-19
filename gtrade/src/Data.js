import React from 'react';
import './Data.css';
class Data extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            Symbol: props.Symbol,
            Name: props.Name
        }
    }

    render() {
        return <h1>Data</h1>
        
      }
}

export default Data;