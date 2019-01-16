import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry'

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
        //fetches userlist, do json magic, and update robots state with list of users
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    //on search change, set searchfield to the value in the search box
    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        //create list of robots whose name contains what has been typed in the search box
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        //if nonzero
        return !robots.length ?
            <h1>Loading...</h1> :
            (
                //render the component
                //within errorboundry, if anything in cardlist fails, it will be caught
                <div className='tc'>
                    <h1 className='f2'>Robot Office Directory</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

export default App;