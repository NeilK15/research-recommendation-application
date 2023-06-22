import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [message, setMessage] = useState("");

	useEffect(() => {
		fetch("https://www.jcquotes.com/api/quotes/random")
			.then((res) => res.json())
			.then((data) => setMessage(data.text));
	}, []);

	return (
		<>
			<div>
				<p>{message}</p>
			</div>
		</>
	);
}

export default App;
