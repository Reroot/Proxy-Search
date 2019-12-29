import React, { Component } from "react";
import "./App.css";
import { Search } from "./comps/Search";
import { CardList } from "./comps/card-list/card-list.jsx";
class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: []
		};
	}

	componentWillMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}
	//in between the tags of a comp is the children passed down from

	// {this.state.monsters.map((x) => (
	// 	<h2 key={x.id}>
	// 		{x.name} and my I live on {x.address.street}
	// 	</h2>
	// ))}
	render() {
		return (
			<div>
				<CardList name="Artem">
					{this.state.monsters.map((x) => (
						<h2 key={x.id}>
							{x.name} and my I live on {x.address.street}
						</h2>
					))}
				</CardList>
				<Search name="search-bar"> </Search>
			</div>
		);
	}
}

export default App;

// monsters: [
// 	{
// 		id: "1",
// 		name: "Haiixz",
// 		killmove: "Phaser"
// 	},
// 	{
// 		id: "2",
// 		name: "Ioax",
// 		killmove: "Lazer Trap"
// 	},
// 	{
// 		id: "3",
// 		name: "Qxa",
// 		killmove: "Ioz zapper"
// 	}
