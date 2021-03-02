import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Soda.css';
const Soda = () => {
	return (
		<React.Fragment>
			<div className='Soda'>This is Soda</div>
			<Button component={RouterLink} to='/'>
				Home
			</Button>
		</React.Fragment>
	);
};
export default Soda;
