import { useEffect, useState } from "react";
import "./App.css";

const initialInput = "";

function App() {
	const [input, setInput] = useState(initialInput);
	const [lanes, setLanes] = useState([[10], [10], [10], [10], [10]]);

	function handleSubmit(event) {
		event.preventDefault();

		let selectedIndex,
			currSum = 0,
			prevSum = Number.MAX_VALUE;

		// select the lane with the least sum
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

	useEffect(() => {
		const timer = setInterval(() => {
			let newLanes = [...lanes];
			newLanes = newLanes.map((lane) => {
				if (lane[0] > 0) lane[0] = lane[0] - 1;
				else lane.shift();
				return lane;
			});

			setLanes(newLanes);
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	});

	return (
		<div className="App">
			<form className="form" onSubmit={handleSubmit}>
				<input
					className="input"
					value={input}
					type="number"
					required
					placeholder="Enter Cart Items"
					onChange={(e) => setInput(e.target.valueAsNumber)}
				/>
				<button type="submit">Checkout</button>
			</form>

			<div className="lanes">
				{lanes.map((lane, index) => {
					return (
						<div className="lane" key={index}>
							<div className="counter">Counter: {index + 1}</div>
							{lane.map((item, index) => {
								return (
									<li className="lane-item" key={index}>
										{item}{" "}
									</li>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
