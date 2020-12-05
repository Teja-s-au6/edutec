import React, { Component } from 'react';
import axios from 'axios';
import Results from './components/Results';
class App extends Component {
	state = {
		rollNumbers: '',
		results: [],
		disable: false
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = async () => {
		this.setState({ disable: true });

		if (this.state.rollNumbers === '') {
			alert('Fill the input first');
		} else {
			const data1 = this.state.rollNumbers.split(',');
			const headers = { 'Content-Type': 'application/json' };
			const { data } = await axios.post('https://eduteclog.herokuapp.com/getresults', data1, {
				headers: headers
			});
			this.setState({ results: data.results });
		}
	};

	render() {
		return (
			<div>
				<center>
					<input type="text" name="rollNumbers" onChange={this.handleChange} />
					<button onClick={this.handleSubmit} disabled={this.state.disable}>
						{' '}
						Submit
					</button>
					{this.state.results.length === 0 ? (
						<h1>Fill the input , click on submit and wait</h1>
					) : (
						<Results results={this.state.results} />
					)}
				</center>
			</div>
		);
	}
}

export default App;
