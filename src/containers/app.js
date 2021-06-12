import React, { Component } from 'react';
import CardArray from '../components/cardArray';
import SearchBox from '../components/searchBox';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/errorBoundry'
import './App.css';



class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value});
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(responce => responce.json())
		.then(users => this.setState({robots: users}));

	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		if (this.state.robots.length === 0){
			return <h1> Loading </h1>
		} else
			return (
			<div className='tc'>
				<h1 className='f1'> RoboFriends </h1>
				<SearchBox 
					searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundry>
						<CardArray robots={filteredRobots}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
	
}

export default App;