import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: ""
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		//Destrure this.state, this save entries like "this.state.monsters"
		const { monsters, searchField } = this.state;
		//filter based on what is typed in
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		// {
		// 	("pass it down to after filted and take it as prop in card componet");
		// }
		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox onSearchChange={this.onSearchChange} />
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
