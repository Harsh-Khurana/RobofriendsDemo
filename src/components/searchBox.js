import React from 'react';

const SearchBox=(props)=>{
	return (
		<input className="pa3 ma2 ba b--green bg-lightest-blue" 
		type="search" 
		placeholder="search robos"
		onChange={props.searching}/>
	)
}

export default SearchBox;