import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
const Chips = () => {
	return (
		<React.Fragment>
			<div className='Chips'>This is chips</div>
			<Button component={RouterLink} to='/'>
				Home
			</Button>
		</React.Fragment>
	);
};
export default Chips;
