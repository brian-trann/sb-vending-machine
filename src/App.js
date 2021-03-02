import './App.css';
import Home from './Home';
import Chips from './Chips';
import Candy from './Candy';
import Soda from './Soda';
import NavBar from './NavBar';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<NavBar />
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/chips'>
					<Chips />
				</Route>
				<Route exact path='/candy'>
					<Candy />
				</Route>
				<Route exact path='/soda'>
					<Soda />
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
