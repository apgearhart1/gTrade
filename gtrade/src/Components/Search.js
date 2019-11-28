import React, {Component} from 'react';
import StocksJSON from './stocks.json';
import StocksJSON_NEW from './StocksJSON_NEW.json'
import SearchBox from './SearchBox';
import Stocks from './Stock';
import Stocklist from './stockList';
import './Search.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link, 
  withRouter,
  history
} from "react-router-dom";
import { browserHistory } from 'history';

class Search extends Component{

    constructor(props){
      super(props);
      this.state = {
        stocks: {StocksJSON},
        stocks2: {StocksJSON_NEW},
        SearchStock: '',
        Symbol: 'undefined'
      }
    }

    handleInput = (e) => {

      this.setState({ SearchStock: e.target.value});

      

    }
    handleSelect = (e) => {
      this.setState({Symbol: e.target.value});
      console.log(e.target.value);
    }
    onSubmitHandler = (e) => {
      e.preventDefault();
      this.setState({
        showName: true
      });
      if(this.state.Symbol != 'undefined'){
      this.props.history.push({
        pathname:"../Data",
        state:{//right now these are hard-coded in, you can alter these values for now
            Symbol: this.state.Symbol,

         }
       });
      }
    }

  render() {
    let filteredStocks = StocksJSON.filter((stock) => {
        return stock.Name.toLowerCase().includes(this.state.SearchStock.toLowerCase()) || stock.Symbol.toLowerCase().includes(this.state.SearchStock.toLowerCase())
    })
    //localStorage.username = $("#username").val().trim();
  return (
      <div>
      <SearchBox handleInput={this.handleInput.bind(this)}/>
      <div>
      <form>

      <div id="stock_list" align="center">

      <Stocklist onChange={this.handleSelect} filteredStocks={filteredStocks} SearchStocks={this.state.SearchStock}/>

      </div>

      <input type="submit" onClick={this.onSubmitHandler}></input>
      </form>
      </div>
        
      
      </div>
    )
      
    }
  }
 
 
 export default withRouter(Search);