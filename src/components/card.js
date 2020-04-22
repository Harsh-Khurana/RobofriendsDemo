import React from 'react';

const card=(props)=>{
	const {id,name,email}=props;
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${id}`} alt='roboimage'/>
			<h2>{name}</h2>
			<h3>{email}</h3>
		</div>
	);
}

export default card;