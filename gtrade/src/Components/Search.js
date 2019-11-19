import React, {Component} from 'react';
import StocksJSON from './stocks.json';
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
        SearchStock: ''
      }
    }

    handleInput = (e) => {

      this.setState({ SearchStock: e.target.value})
    }
    onSubmitHandler = (e) => {
      e.preventDefault();
      this.setState({
        showName: true
      });
      this.props.history.push({
        pathname:"../Data",
        state:{//right now these are hard-coded in, you can alter these values for now
            Symbol: 'aapl',
            Name: 'Apple'
         }
       });
    }

  render() {
    let filteredStocks = StocksJSON.filter((stock) => {
        return stock.Name.toLowerCase().includes(this.state.SearchStock.toLowerCase()) || stock.Symbol.toLowerCase().includes(this.state.SearchStock.toLowerCase())
    })
    
  return (
      <div>
      <SearchBox handleInput={this.handleInput}/>
      <div>
      <form>

      <div id="stock_list" align="center">

      <Stocklist filteredStocks={filteredStocks} SearchStocks={this.state.SearchStock}/>

      </div>

      <input type="submit" onClick={this.onSubmitHandler}></input>
      </form>
      </div>
        
      
      </div>
    )
      
    }
  }
 
 
 export default withRouter(Search);