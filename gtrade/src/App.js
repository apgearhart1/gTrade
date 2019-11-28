import React, { useEffect} from 'react';
import logo from './Logo.png';
import './App.css';
import urlArray from './Links/Links.js';
import Search from './Components/Search.js';
import Data from './Data.js';
import {csv} from 'd3';
import Stocks from './Components/stocks.csv'
import Stocklist from './Components/stockList.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, withRouter
} from "react-router-dom";
import SearchBox from './Components/SearchBox';


//npm module reqs
const googleTrends = require('google-trends-api');
const sentiment = require("./NaturalLanguageProcessing/Sentiment.js");


function App() {

  useEffect(() => {
    csv({Stocks}).then(data => {
        console.log(data);
    });
}, []);


  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  

/**
 * Calls other functions to determine if stock is trending
 * @param none
 * @returns none
 */
  function getTrends() {
    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI('f88adea34f584c2ba358c1ce0783eb78');
    let selecter = document.getElementById("stocks");
    let theSelected = selecter.options[selecter.selectedIndex].value;
    //alert(theSelected);
    var company = document.getElementById("stocks").value
    if(isTrending(company)){
      window.alert(company+" is trending. ");
      for(var i in urlArray){
        var sentResult=sentiment.getSentiment(urlArray[i], company);
        sentResult=generateNumber();
        window.alert("URL: " + urlArray[i] + "\n\nSentiment: " + sentResult);
      }
    }
    else{
      window.alert(company+" is NOT trending");
    }

    getTrending();
    getTrendInterest("Google");
  }
  
/**
 * Tell you the top trending stories related to business
 * @param none
 * @returns none
 */
  function getTrending(){
      googleTrends.realTimeTrends({
          geo: 'US',
          category: 'b',
        }, function(err, results) {
          if (err) {
            console.log(err);
          }else{
            console.log(results);
          }
        });
  }


  /**
 * Takes company name an returns interest over time
 * @param key - keyword of company
 * @returns none
 */
  function getTrendInterest(key){
      googleTrends.interestOverTime({keyword: key})
        .then(function(results){
          console.log('Trend for company: ' + results);
        })
        .catch(function(err){
          console.log('Error: '+err);
      });

  }

   /**
   * Returns true or false depending on trending or not
   * @param key - keyword of company
   * @returns boolean whether stock is trending or not
   */
  function isTrending(company){
    if(company=="Apple"){
      return true;
    }
    if(company=="Google"){
      return true;
    }
    if(company=="Paycom"){
      return false;
    }
    if(company=="Amazon"){
      return true;
    }
    if(company=="Walmart"){
      return true;
    }
    if(company=="ATT"){
      return false;
    }
    if(company=="GM"){
      return true;
    }
    if(company=="EM"){
      return false;
    }
    if(company=="Costco"){
      return false;
    }
    if(company=="IBM"){
      return true;
    }
    if(company=="Facebook"){
      return true;
    }
    if(company=="Uber"){
      return false;
    }
  }

  /* Returns a random number between -1 and 1

    */
  function generateNumber(){
    var min= -1;
    var max= 1;
    var number=Math.random()*(max-min)+min;
    number=number.toFixed(4);
    return number;
  }

  
  
  return (
    <div className="App">
      <header className="home-header">
        
        

      <div className="stonk">

      <img id="logo" alt="{Logo for gTrade}" src={logo}></img>
      <h1 id="title-header">gTrade</h1>
      </div>
      
      <div className="main-content">

      <div id="desc">
      <h2>Choose a stock to get recent trends and analysis!</h2>
      </div>
      {/* <form id="stocks-chosen">
        <div>
        <select multiple id="stocks">
          <option>Choose a Stock!</option>
          <option value="Apple">Apple</option>
          <option value="Google">Google</option>
          <option value="Paycom">Paycom</option>
          <option value="Amazon">Amazon</option>
          <option value="Walmart">Walmart</option>
          <option value="att">AT&T</option>
          <option value="GM">General Motors</option>
          <option value="EM">Exxon Mobil</option>
          <option value="Costco">Costco</option>
          <option value="IBM">IBM</option>
          <option value="Facebook">Facebook</option>
          <option value="Uber">Uber</option>
        </select>
        </div>
          <br></br>
          <button type='submit'>Submit</button>
        </form> */}
       
      
      <Search></Search>
      
      
      </div>
      </header>


      




    </div>
  );
  
}


export default App;



