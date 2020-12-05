import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
	const [timer, setTimer] = useState(0);

	const countdown = (event) => {
		if (event.keyCode == 13) {
			const inputValue = document.getElementById("timeCount").value;
			if (!isNaN(inputValue)) {
				setTimer(Math.floor(inputValue));
			} else {
				setTimer(0);
			}
		}
	};

	useEffect(() => {
		timerHandler();
	}, [timer]);

	const timerHandler = () => {
		let count = setTimeout(() => {
			setTimer(timer - 1);
		}, 1 * 1000);
		if (timer == 0) {
			clearTimeout(count);
		}
	};
	return (
		<div className="wrapper">
			<div id="whole-center">
				<h1>
					Reverse countdown for
					<input id="timeCount" onKeyDown={countdown} /> sec.
				</h1>
			</div>
			<div id="current-time">{timer}</div>
		</div>
	);
};

export default App;
