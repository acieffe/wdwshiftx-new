import { response } from 'express';
import './App.css';

function App() {

	state = {
		shifts: []
	}

	componentDidMount() {
		this.getShifts();
	}

	getShifts = _ => {
		fetch('http://localhost:3000/shifts')
		.then(response => response.json())
		.then(response => this.setState({ shifts: response.data}))
		.catch(err => console.log(err))
	}

	renderShift = ({ id, shiftName }) => <div key={id}>{shiftName}</div>

	return <div className="App">Hello!
		{shifts.map(this.renderShift)}
	</div>;
}

export default App;
