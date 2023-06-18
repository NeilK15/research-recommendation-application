import React, { useState } from "react";
import "../App.css";

function TextBox() {
	const [email, newEmail] = useState("");

	return (
		<div>
			<label htmlFor="email"></label>
			<input
				type="text"
				name="Email"
				id="email"
				onChange={(event) => newEmail(event.target.value)}
				className="text-box"
			/>

			<label htmlFor="next"></label>
			<input
				type="button"
				value="Next"
				id="next"
				className="next-button"
			/>
		</div>
	);
}

export default TextBox;
