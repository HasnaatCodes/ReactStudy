import './App.css';
import { useState } from 'react';

const List = (props) => {
	const arrayList = ['wow', 'cool', 'sick'];
	return (
		<ul className={props.className}>
			{arrayList.map((item) => (
				<li>{item}</li>
			))}
		</ul>
	);
};

const App = () => {
	const [toggleOne, setToggleOne] = useState('toggle-ul-off');
	const [toggleTwo, setToggleTwo] = useState('toggle-ul-off');
	const [toggleThree, setToggleThree] = useState('toggle-ul-off');

	const handleOptionOne = () => {
		toggleOne === 'toggle-ul-off'
			? setToggleOne('')
			: setToggleOne('toggle-ul-off');
	};

	const handleOptionTwo = () => {
		toggleTwo === 'toggle-ul-off'
			? setToggleTwo('')
			: setToggleTwo('toggle-ul-off');
	};

	const handleOptionThree = () => {
		toggleThree === 'toggle-ul-off'
			? setToggleThree('')
			: setToggleThree('toggle-ul-off');
	};

	return (
		<div className="App">
			<div>
				<ol>
					<li onClick={handleOptionOne}>option 1</li>
					<List className={toggleOne}></List>
					<li onClick={handleOptionTwo}>option 2</li>
					<List className={toggleTwo}></List>
					<li onClick={handleOptionThree}>option 3</li>
					<List className={toggleThree}></List>
				</ol>
			</div>
		</div>
	);
};

export default App;
