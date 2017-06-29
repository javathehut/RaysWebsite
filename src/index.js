import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';
import Music from './Music';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <Router history={browserHistory}>    
        <Route path="/" component={App} >
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
            <Route path="music" component={Music} />
        </Route>
    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
