import React from 'react';
import './Data.css';
class Data extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            Symbol: this.props.location.state.Symbol,
            Name: this.props.location.state.Name
        }
        alert(this.state.Symbol);
        alert(this.state.Name);
    }

    
    render() {
        
        return <h1>This is the Data screen</h1>
        
      }
}

export default Data;