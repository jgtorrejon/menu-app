import { View, Text, FlatList } from "react-native";

const Menu = (menu) => {
	return (
		<View>
			<Text>{menu.name}</Text>
			<FlatList
				data={menu.items}
				renderItem={({ item }) => <Text>{item.name}</Text>}
				keyExtractor={(item) => item.name}
			/>
		</View>
	);
};

export default Menu;
