import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';

//state can change based on what is in search box
//state >> props
class App extends Component {
    constructor() {
        super();
        //this state describes the app and lives in the parent component
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    //on search change, set searchfield to the value in the search box
    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })
    }

    render() {
        //create list of robots whose name contains what has been typed in the search box
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        //render the component
        return (
            <div className='tc'>
                <h1 className='f2'>Robot Office Directory</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots = {filteredRobots}/>
            </div>
        );
    }
}

export default App;