import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "../config/navigator";

const App = () => {
	return (
		<NavigationContainer>
			<MainNavigator />
		</NavigationContainer>
	);
};

export default App;
