import React, { useState } from "react";

function TextBox() {
	const [email, newEmail] = useState("");

	return (
		<div>
			<label htmlFor="email"></label>
			<input
				type="text"
				name="Email"
				id="email"
				size={50}
				onChange={(event) => newEmail(event.target.value)}
			/>

			<label htmlFor="next"></label>
			<input type="button" value="Next" id="next" />
		</div>
	);
}

export default TextBox;
