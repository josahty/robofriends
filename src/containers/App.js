import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { connect } from 'react-redux';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry'
import { setSearchField, requestRobots } from '../actions'

//state can change based on what is in search box
//state >> props
//has state, so this is a "smart" component

const mapStateToProps = state => {
    return {
        //comes from searchRobots reducer
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    componentDidMount() {
        //fetches userlist, do json magic, and update robots state with list of users
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        //create list of robots whose name contains what has been typed in the search box
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        //if nonzero
        return isPending ?
            <h1>Loading...</h1> :
            (
                //render the component
                //within errorboundry, if anything in cardlist fails, it will be caught
                <div className='tc'>
                    <h1 className='f2'>Robot Office Directory</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

//connect is a higher order fuction, meaning it returns another function
//sub to any state changes in redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);