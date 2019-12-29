import React, { Component } from "react";
import "./App.css";
import { Search } from "./comps/Search";

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

	render() {
		return (
			<div>
				<Search />
				{this.state.monsters.map((x) => (
					<h2 key={x.id}>
						{x.name} and my I live on {x.address.street}
					</h2>
				))}
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
