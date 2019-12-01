import React from 'react';
import Stock from './Stock';
import './stockList.css';


class StockList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Ticker: ''
        }
    }
    

    render(){
        let stocks = this.props.filteredStocks.map((stock, i) => {
            return <Stock key={i} Symbol={stock.Symbol} Name={stock.Name}/>
        });
        return(
            
            <div id = "list">
                
                <select onChange={this.props.onChange}>
                    {stocks}
                    </select>
            </div>
        )
    
        }



}
    export default StockList;
    
    
    
    
    
    
    // constructor(){
    //     super();
    //     this.state = {
    //         search: ''
    //     };
    // }
    
    // updateSearch(event){
    //     this.setState({search: event.target.value.substr(0, 20)});
    // }

    // render(){
    //     let filteredStocks = StocksJSON.filter(
    //         (stocks)=>{
    //             return stocks.Name.indexOf(this.state.search)!== -1;
    //         }
    //     );
    //     return(
    //         <div>
    //             <input type='text' value={this.state.search}
    //             onChange={this.updateSearch.bind(this)}
    //             options={searchList}
    //             openMenuOnClick={false}
    //             placeholder= "Search...">
    //             </input>
                
    //         </div>
    //     )
    // }
    
    



