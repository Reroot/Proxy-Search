import React, { Component } from "react";
import "./App.css";
import { Search } from "./comps/Search";
import { CardList } from "./comps/card-list/card-list.jsx";
class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: ""
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
				<Search
					name="search-bar"
					type="search"
					placeholder="Search Monster"
					onChange={(e) =>
						this.setState((this.state.searchField = e.target.value))
					}
				>
					{console.log(this.state.searchField)}
				</Search>

				<CardList name="Artem">
					{this.state.monsters.map((x) => (
						<h2 key={x.id}>
							{x.name} On {x.address.street}
						</h2>
					))}
				</CardList>
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
