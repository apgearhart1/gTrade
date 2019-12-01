import React from 'react';
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
            let nt = 'not trending';
            let i = response.data.indexOf('+');
            let score = response.data.slice(0, i);
            if(response.data.includes(nt)){
                let date = response.data.slice(i+1, response.data.length);
                alert(this.state.Symbol + " is not trending at the moment. \nLast date it was trending is: " + date);
            }
            else if(score > 0 && score <= .5){
                alert(this.state.Symbol + " outlook is looking somewhat positive, you might want to look into it!  \nReceived a score of " + score);
            }
            else if(score > .5 && score <= 1){
                alert(this.state.Symbol + " outlook is very positive, we recommend you buy it soon!!  \nReceived a score of " + score);
            }
            else if(score < 0 && score >= -.5){
                alert(this.state.Symbol + " outlook is looking somewhat negative, you might not want to buy it!  \nReceived a score of " + score);
            }
            else if(score < -.5 && score >= -1){
                alert(this.state.Symbol + " outlook is not looking good, we don't recommend you buy it!  \nReceived a score of " + score);
            }
            
            this.data = response.data;
            //this.render();
            //ReactDOM.render(<div>{89}</div>);
        });
        
    }
    
    
    render() {
        
          
          return(
              <h1>Your response will be in the alert box above!</h1>
          );
        
    }

    
}

export default Data;