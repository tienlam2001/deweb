import logo from './logo.svg';
import './App.css';
import React from 'react';



class App extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			NameOfThis : "Lam Van"
		}
	}
	render(){
		return(
			<div class = "App">
				<div id ="firstContainer">
					<h1>Hello wOrld</h1>
				</div>
			</div>

		)
	}
}



export default App;
