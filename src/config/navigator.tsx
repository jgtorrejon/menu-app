import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../app/screens/Home";
import MenuDetail from "../app/screens/MenuDetail";
import MenuItemType from "../interfaces/menuItemInterface";
import Header from "../app/components/Header";

export type RootStackParamsList = {
	Home: undefined;
	MenuDetail: { item: MenuItemType };
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

export const MainNavigator = () => {
	const renderHeader = () => <Header />;

	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					header: renderHeader,
				}}
			/>
			<Stack.Screen
				name="MenuDetail"
				component={MenuDetail}
				options={{
					presentation: "modal",
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};
