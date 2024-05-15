import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
	const { user, logout } = useContext(UserContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (!user) navigate("/login");
	});

	return (
		<div>
			<h1>Home: hello {user?.username}</h1>
			<button onClick={logout}>Logout</button>
		</div>
	);
}
