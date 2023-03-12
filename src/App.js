import { useState } from "react";
import "./App.css";

const initialInput = "";

function App() {
	const [input, setInput] = useState(initialInput);
	const [lanes, setLanes] = useState([[], [], [], [], []]);

	function handleSubmit(event) {
		event.preventDefault();

		// select the lane with the least sum
		let selectedIndex,
			currSum = 0,
			prevSum = Number.MAX_VALUE;
		lanes.forEach((lane, index) => {
			currSum = lane.reduce((item, val) => {
				return item + val;
			}, 0);
			if (currSum < prevSum) {
				selectedIndex = index;
				prevSum = currSum;
				currSum = 0;
			}
		});

		// push the value to that lane
		let newLanes = lanes;
		newLanes[selectedIndex].push(input);

		setInput(initialInput);
		setLanes(newLanes);
	}

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<input
					value={input}
					type="number"
					placeholder="Enter Cart Items"
					onChange={(e) => setInput(e.target.valueAsNumber)}
				/>
				<button type="submit">Checkout</button>
			</form>

			<div className="lanes">
				{lanes.map((lane, index) => {
					return (
						<li className="lane" key={index}>
							X
							{lane.map((item, index) => {
								return (
									<li className="lane-item" key={index}>
										{item}{" "}
									</li>
								);
							})}
						</li>
					);
				})}
			</div>
		</div>
	);
}

export default App;
