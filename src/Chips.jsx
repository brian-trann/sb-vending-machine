import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Chips.css';
const Chips = () => {
	const [ count, setCount ] = useState(0);
	const handleClick = () => {
		setCount((count) => count + 1);
	};
	return (
		<React.Fragment>
			<div className='Chips'>
				This is chips
				<div className='Chips-counter'>
					<Button onClick={handleClick}>EAT CHIPS: {count}</Button>
				</div>
			</div>
			<Button component={RouterLink} to='/'>
				Home
			</Button>
		</React.Fragment>
	);
};
export default Chips;
