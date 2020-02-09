import React from "react";

import "./search-box.styles.css";
//functional componets don't have acess to state, since we are not extending componet
//also they don't have acess to lifecycle methods, just some props

//we can use props or destructure values
//const SearchBox = ({ placeholder, handelChange} = this.state)
// ask yourself what changes when state changes?
//react has only one way data flow, apps,js is good place to put state,
//event happens on a componet, tigger an event handeler to let it know
//upwards to update and then pass it down again updagted from a lower componet

//
export const SearchBox = (props) => (
	<input
		className="search-box"
		type="search"
		placeholder="Search monsters"
		onChange={props.onSearchChange}
	/>
);
