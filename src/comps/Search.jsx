import React from "react";
//function expression
export const Search = () => {
	return (
		<div>
			<button>Search</button>
			<input
				type="search"
				placeholder="Search Proxies"
				// onChange={(e) => console.log(e.target.value)}
			></input>
		</div>
	);
};
