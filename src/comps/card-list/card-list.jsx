import React from "react";
import "./card-list.styles.css";
//function componet
export const CardList = (props) => {
	//returns an empty window object
	//console.log(props);
	//hello is children it's in between the brackets
	//<h1>Hello {props.children}</h1>

	return (
		<div className="card-list">
			<h1>{props.children}</h1>
		</div>
	);
};
