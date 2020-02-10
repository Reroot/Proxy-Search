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
		//**** */
		//if we use arrow fucntions for our method we don't have to do this.
		//this.onSearchChange = this.onSearchChange.bind(this);
		//we bind to have the finction refrence across the app
		//if we write our own method we would have to be carfful how we write it
		//would need to bind it so it can use the state
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}
	//we could have done this here, but instead it's better to pass in and change the field
	//with a reusable componet.
	//Babel help newer js with older js transformations.

	//must state contex for  normal functions methods, otherwise react will not give the scope
	//But with arrow functions it auto binds to app componet
	onSearchChange = (e) => {
		this.setState({ searchField: e.target.value });
	};
	//Method is recalled/rerendered everytime something is typed, settign a new
	//arry, and passing it , then it's dynamically updating.
	//. This is why react is graet we don't have to do extensive calls to show/side elements
	//react rerenders it for us every call.
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
		//onSearchChange={e => this.setState({ searchField : e.target.value})} can make a method instead on searchChange
		//we should write our own method, so we can use it multiple timez
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
