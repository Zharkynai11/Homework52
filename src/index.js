import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Aside from './Aside';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

import * as serviceWorker from './serviceWorker';




ReactDOM.render(<Header />, document.getElementById('header'));

ReactDOM.render(<Aside />, document.getElementById('aside'));

ReactDOM.render(<Content />, document.getElementById('content'));

ReactDOM.render(<Footer />, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
