import { useState } from "react";
import "./App.css";

function App() {
	const [input, setInput] = useState();
	const [lanes, setLanes] = useState([[], [], [], [], []]);

	function handleChange(event) {
		event.preventDefault();
		setInput(event.currentTarget.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<input
					type="number"
					value={input}
					placeholder="Enter Cart Items"
					onChange={handleChange}
				/>
				<button>Checkout</button>
			</form>

			<div className="lanes">
				{lanes.map((lane, index) => {
					return (
						<li className="lane" key={index}>
							X
						</li>
					);
				})}
			</div>
		</div>
	);
}

export default App;
