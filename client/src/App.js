import React, { Component } from 'react';
import axios from 'axios';
import Results from './components/Results';
class App extends Component {
	state = {
		rollNumbers: '',
		results: []
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = async () => {
		if (this.state.rollNumbers === '') {
			alert('Fill the input first');
		} else {
			const data1 = this.state.rollNumbers.split(',');
			const headers = { 'Content-Type': 'application/json' };
			const { data } = await axios.post('https://eduteclog.herokuapp.com/getresults', data1, { headers: headers });
			this.setState({ results: data.results });
		}
	};

	render() {
		return (
			<div>
				<center>
					<input type="text" name="rollNumbers" onChange={this.handleChange} />
					<input type="button" value="submit" onClick={this.handleSubmit} />
					{this.state.results.length === 0 ? <h1>Fill the input , click on submit and wait</h1> : <Results results={this.state.results} />}
				</center>
			</div>
		);
	}
}

export default App;
