import React from "react";
//function componet
export const CardList = (props) => {
	//returns an empty window object
	console.log(props);
	//hello is children it's in between the brackets
	return (
		<div>
			<h1>Hello {props.children}</h1>
		</div>
	);
};
