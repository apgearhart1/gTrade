import React from 'react';
import axios from 'axios';
//import Stocks from './Components/stocks.csv';
import {csv} from 'd3';
import StocksJSON from './stocks.json';
import { Select } from 'react-select'
const { API_KEY } = 'pk_a193565e1ab246228b2c1f8b911c75fd';
const API_URL_BASE = 'https://cloud.iexapis.com/stable/stock/';


const searchList = StocksJSON.map(
    ({ stocks }) => {
      return{ 
       value: stocks, 
       label: stocks 
      }
     }
    );

export default class stockList extends React.Component{
    constructor(){
        super();
        this.state = {
            search: ''
        };
    }
    
    updateSearch(event){
        this.setState({search: event.target.value.substr(0, 20)});
    }

    render(){
        let filteredStocks = StocksJSON.filter(
            (stocks)=>{
                return stocks.Name.indexOf(this.state.search)!== -1;
            }
        );
        return(
            <div>
                <input type='text' value={this.state.search}
                onChange={this.updateSearch.bind(this)}
                options={searchList}
                openMenuOnClick={false}
                placeholder= "Search...">
                </input>
                
            </div>
        )
    }
    
    



};