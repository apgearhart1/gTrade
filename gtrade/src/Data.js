import React from 'react';
import './Data.css';
class Data extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            Symbol: this.props.location.state.Symbol
        }
        alert(this.state.Symbol);
    }

    
    render() {
        
        return <h1>This is the Data screen</h1>
        
      }
}

export default Data;