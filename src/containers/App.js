import React from 'react';
import Cardlist from '../components/cardList';
import SearchBox from '../components/searchBox';
import 'tachyons';
import {robots} from '../robots';
import './App.css';
import ErrorBoundary from '../components/errorBoundary.js';
import Scroll from '../components/scroll';

class App extends React.Component{
	constructor(){
		super();
		this.state={
			robots:robots,
			searchfeild:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robots:users}));
	}

	onSearchChange=(event)=>{
		this.setState({	searchfeild:event.target.value	})
	}

	render(){
		const filteredRobos=this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchfeild.toLowerCase())
		});
		if(this.state.robots.length===0){
			return <h1>Loading...</h1>
		}
		else{
			return(
				<div className='tc'>
					<h1 className='f1'>ROBOFRIENDS</h1>
					<SearchBox searching={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<Cardlist robots={filteredRobos}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;
