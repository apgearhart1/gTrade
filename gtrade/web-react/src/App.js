import React from 'react';
import stonk from './stonks.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="home-header">
      <div className="stonk">
      <img src={stonk} alt="Logo Placeholder" align="left"></img>
      <h1 id="title-header">gTrade</h1>
      </div>

      <div className="main-content"> 

      <div id="desc">
      <h2>Choose a stock to get recent trends and analysis!</h2>
      </div>
        <form id="stocks-chosen">
        <select multiple>
          <option>Choose a Stock!</option>
          <option value="Apple">Apple</option>
          <option value="Google">Google</option>
          <option value="Paycom">Paycom</option>
          <option value="Amazon">Amazon</option>
          <option value="Walmart">Walmart</option>
          <option value="att">AT&T</option>
          <option value="gm">General Motors</option>
          <option value="em">Exxon Mobil</option>
          <option value="costco">Costco</option>
          <option value="ibm">IBM</option>
          <option value="fb">Facebook</option>
          <option value="uber">Uber</option>
        </select>
          <br></br>
          <input type="submit" value="Submit" ></input>
        </form>
      </div>
      </header>
    </div>
  );
}

export default App;
