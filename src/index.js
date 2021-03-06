import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'

import App from './App';

ReactDOM.render(
  <Router>
    <div className="bg">
    <App />
    </div>
  </Router>,
  document.getElementById('root')
);
