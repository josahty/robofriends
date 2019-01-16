import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons'
import './index.css';
import CardList from './CardList';
import { robots } from './robots';
import * as serviceWorker from './serviceWorker';

//"this whole thing is what React does"
//greeting is a prop (property)
// ReactDOM.render(<Card />, document.getElementById('root'));
ReactDOM.render(
                <CardList robots={robots} />                
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
