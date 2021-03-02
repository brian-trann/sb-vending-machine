import React from 'react';

import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './NavBar.css';

const useStyles = makeStyles((theme) => ({
	root       : {
		flexGrow : 1
	},
	menuButton : {
		marginRight : theme.spacing(2)
	},
	title      : {
		flexGrow : 1
	}
}));
const NavBar = () => {
	const classes = useStyles();
	return (
		<AppBar position='static'>
			<Toolbar>
				{/* <IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'
					>
						<MenuIcon />
					</IconButton> */}
				<Typography variant='h6' className={classes.title}>
					<nav className='NavBar'>
						<NavLink exact to='/'>
							Home
						</NavLink>
						<NavLink exact to='/chips'>
							Chips
						</NavLink>
						<NavLink exact to='/candy'>
							Candy
						</NavLink>
						<NavLink exact to='/soda'>
							Soda
						</NavLink>
					</nav>
				</Typography>
			</Toolbar>
		</AppBar>
	);
};
export default NavBar;
