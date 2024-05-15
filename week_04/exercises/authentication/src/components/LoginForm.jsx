import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ newUser, setNewUser }) {
	const { user, login } = useContext(UserContext);
	const [isFormError, setIsFormError] = useState(false);
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsFormError(
			login({ username: newUser.username, password: newUser.password })
		);
	};
	useEffect(() => {
		if (user) navigate("/");
	}, [user]);
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					value={newUser.username}
					onChange={(e) => {
						setNewUser((prev) => {
							return { ...prev, username: e.target.value };
						});
					}}
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					value={newUser.password}
					onChange={(e) => {
						setNewUser((prev) => {
							return { ...prev, password: e.target.value };
						});
					}}
				/>
			</div>
			{isFormError && (
				<div style={{ color: "red" }}>Credentials not correct</div>
			)}
			<div>
				<button type="submit">submit</button>
			</div>
		</form>
	);
}
