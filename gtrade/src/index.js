import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Data from './Data';
import Test from './Test';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
const routing = (
    <Router>
      <div>

      
        <Route exact path="/" component={App} />
        <Route path="/Data" component={Data} />
        <Route path="/Test" component={Test}/>
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Data">Next screen</Link>
        </li>
        <li>
          <Link to="/Test">Test</Link>
        </li>
        
      </ul>
      </div>
    </Router>
  )


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
