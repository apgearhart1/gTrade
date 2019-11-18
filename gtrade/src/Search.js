import React, {Component} from 'react';
import axios from 'axios';
import StocksJSON from './Components/stocks.json';
const { API_KEY } = 'pk_a193565e1ab246228b2c1f8b911c75fd';
const API_URL_BASE = 'https://cloud.iexapis.com/stable/stock/';
//Stuff needed after base {stock}/quote?token=pk_a193565e1ab246228b2c1f8b911c75fd'
//token = pk_a193565e1ab246228b2c1f8b911c75fd

class Search extends Component{
    state = {
      query: '',
    }

    getInfo = (stock) => {
      let filteredStocks = StocksJSON.filter(
        (stocks)=>{

            return stocks.Name.indexOf(this.state.search)!== -1;
        }
    );
          };
      

      handleInputChange = () => {
        this.setState({
          query: this.search.value
        }, () => {
          if (this.state.query && this.state.query.length > 2) {
            if (this.state.query.length % 2 === 0) {

              this.getInfo()
            }
          } 
        })
      }


  render() {
    return (
      <form>
        <input
          placeholder="Search for a stock..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    )
  }
 }
 
 export default Search