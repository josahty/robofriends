import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

//state can change based on what is in search box
//state >> props
//has state, so this is a "smart" component
class App extends Component {
    constructor() {
        super();
        //this state describes the app and lives in the parent component
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}));
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