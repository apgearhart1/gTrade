import React, {Component} from 'react';
import StocksJSON from './stocks.json';
import StocksJSON_NEW from './StocksJSON_NEW.json'
import SearchBox from './SearchBox';
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
        Symbol: 'AAAU'
      }
    }

    
    /**
     * Returns an array of search results of from the stock list
     * @param e - event variable
     * @returns Array of search results to be printed
     */
    handleInput = (e) => {
      this.setState({ SearchStock: e.target.value});
      let filteredStocks = StocksJSON.filter((stock) => {
        return stock.Symbol.toLowerCase().includes(this.state.SearchStock.toLowerCase())
    });
  
      console.log(filteredStocks);
    }

    /**
     * Sets the state variable Symbol to the currently selected option in the dropdown menu
     * @param e - event variable
     * @returns none
     */
    handleSelect = (e) => {
      this.setState({Symbol: e.target.value});
      console.log(e.target.value);
    }

    /**
     * Takes the current Symbol variable and 'pushes' it to the Data.js page to be analyzed
     * @param e - event variable
     * @returns Change of current page and the current Symbol
     */
    onSubmitHandler = (e) => {
      e.preventDefault();
      if(this.state.Symbol !== ''){
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

  return (
      <div>
      <SearchBox handleInput={this.handleInput.bind(this)} />
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