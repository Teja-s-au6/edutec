import React from 'react';

const Results = ({ results }) => {
	console.log(results);
	return (
		<div>
			<center>
				<h1>Results List</h1>
			</center>
            <center>
			<div>
				<table style={{ border: '1px solid black'}}>
					<thead>
						<tr>
							<th>RollNumbers</th>
							<th>Results</th>
						</tr>
					</thead>
					{results ? (
						results.map((res) => (
							<tbody key={res.rollNumber}>
								<tr >
									<td >{res.rollNumber}</td>
									<td >{res.result}</td>
								</tr>
							</tbody>
						))
					) : (
						<tfoot>
                            <tr>
                                <td>Waiting for Results</td>
                            </tr>
                        </tfoot>
					)}
				</table>
			</div>
            </center>
		</div>
	);
};

export default Results;
