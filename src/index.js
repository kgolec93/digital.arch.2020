import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(
        <Router>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </Router>, rootElement);
} else {
    ReactDOM.render(
        <Router>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </Router>, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
