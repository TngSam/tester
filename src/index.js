import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout/Layout';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faEllipsisV, faQuestion } from '@fortawesome/free-solid-svg-icons';
library.add(faUserCircle);
library.add(faEllipsisV);
library.add(faQuestion);

ReactDOM.render(<Router><Layout /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
