import React, {Component} from 'react';
import StocksJSON from './stocks.json';
import SearchBox from './SearchBox';
import Stocks from './Stock';
import Stocklist from './stockList';

class Search extends Component{
    constructor(props){
      super(props);
      this.state = {
        stocks: {StocksJSON},
        SearchStock: ''
      }
    }

    handleInput = (e) => {
      console.log(e.target.value);
      this.setState({ SearchStock: e.target.value})
    }
    onSubmitHandler = (e) => {
      e.preventDefault();
      this.setState({
        showName: true
      });
      window.location.href = "../Data.js";
    }

  render() {
    let filteredStocks = StocksJSON.filter((stock, symbol) => {
        return stock.Name.toLowerCase().includes(this.state.SearchStock.toLowerCase()) || stock.Symbol.toLowerCase().includes(this.state.SearchStock.toLowerCase())
    })

    return (
      <div>
      <SearchBox handleInput={this.handleInput}/>
      <div>
      <form>
      <Stocklist filteredStocks={filteredStocks}/>
      <input type="submit" onClick={this.onSubmitHandler}></input>
      </form>
      </div>
        
      
      </div>
    )
  }
 }
 
 export default Search