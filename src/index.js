import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons'
import './index.css';
import Card from './Card';
import { robots } from './robots';
import * as serviceWorker from './serviceWorker';

//"this whole thing is what React does"
//greeting is a prop (property)
// ReactDOM.render(<Card />, document.getElementById('root'));
ReactDOM.render(
                <div>
                    <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} username={robots[0].username}/>
                    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} username={robots[1].username}/>
                    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} username={robots[2].username}/>
                    {/* <Card id={robots[3].id} name={robots[3].name} email={robots[3].email} username={robots[3].username}/>
                    <Card id={robots[4].id} name={robots[4].name} email={robots[4].email} username={robots[4].username}/>
                    <Card id={robots[5].id} name={robots[5].name} email={robots[5].email} username={robots[5].username}/>
                    <Card id={robots[6].id} name={robots[6].name} email={robots[6].email} username={robots[6].username}/>
                    <Card id={robots[7].id} name={robots[7].name} email={robots[7].email} username={robots[7].username}/> */}
                </div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
