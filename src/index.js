import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.scss';
import ScrollToTop from './ScrollToTop';
import * as serviceWorker from './serviceWorker';

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
