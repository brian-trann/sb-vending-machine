import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Button } from '@material-ui/core';
import './Candy.css';
const Candy = () => {
	return (
		<React.Fragment>
			<div className='Candy'>This is candy</div>
			<div>
				<Button component={RouterLink} to='/'>
					Home
				</Button>
			</div>
			<div>
				<Link component={RouterLink} to='/'>
					Home - Regular Material UI link
				</Link>
			</div>
		</React.Fragment>
	);
};
export default Candy;
