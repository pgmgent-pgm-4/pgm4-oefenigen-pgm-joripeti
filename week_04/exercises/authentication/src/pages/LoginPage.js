import React, { useState } from "react";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
	const [newUser, setNewUser] = useState({
		username: "",
		password: "",
	});
	return (
		<div>
			<LoginForm newUser={newUser} setNewUser={setNewUser} />
		</div>
	);
}
