import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Button } from '@material-ui/core';

const Candy = () => {
	return (
		<React.Fragment>
			<div className='Candy'>This is candy</div>
			<div>
				<Button component={RouterLink} to='/'>
					Home
				</Button>
			</div>
			{/* <div>
				<Link component={RouterLink} to='/'>
					Home
				</Link>
			</div> */}
		</React.Fragment>
	);
};
export default Candy;
