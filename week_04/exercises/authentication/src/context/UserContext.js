import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const login = (user) => {
		if (user.username == "joris" && user.password == "1234") {
			setUser(user);
			return false;
		} else {
			return true;
		}
	};
	const logout = () => {
		setUser(null);
	};
	return (
		<UserContext.Provider value={{ user, login, logout }}>
			{children}
		</UserContext.Provider>
	);
};
