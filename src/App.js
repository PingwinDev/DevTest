import React, { Component } from 'react';
import './App.css';

import Form1 from './data/form1.json';
import Form2 from './data/form2.json'

import RowInput from './UI/RowInput/RowInput';

class App extends Component {

	render() {
		return (
			<div className="App">
				<form action="" >
					{Form1.map((row) => {
						return <RowInput className='row' row={row}/>;
					})}
          <button className="btn btn-primary" type="submit">Submit</button>
				</form>

        <form action="" >
					{Form2.map((row) => {
						return <RowInput className='row' row={row}/>;
					})}
          <button className="btn btn-primary" type="submit">Submit</button>
				</form>
        
			</div>
		);
	}
}

export default App;
