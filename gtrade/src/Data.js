import React from 'react';
import './Data.css';
import axios from 'axios';

class Data extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            Symbol: this.props.location.state.Symbol
        }

        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000'
        axios.get("https://protected-ravine-04165.herokuapp.com/complete/trends/" + this.state.Symbol)
        .then((response) => {
            console.log(response.data);
            alert(response.data);
            this.data = response.data;
            //this.render();
            //ReactDOM.render(<div>{89}</div>);
        });

    }

    
    render() {
        const timer = setTimeout(() => {
            return <h1>This is the Data screen</h1>;
          }, 5000);
          return () => clearTimeout(timer);
    }

    delayed() {
        return 1;
    }
}

export default Data;