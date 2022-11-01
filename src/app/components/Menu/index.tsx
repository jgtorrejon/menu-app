import { View, Text, FlatList, StyleSheet } from "react-native";
import MenuType from "../../../interfaces/menuInterface";
import { black } from "../../../constants/colors";
import MenuItem from "../MenuItem";

interface MenuProps {
	menu: MenuType;
}

const Menu = ({ menu }: MenuProps) => {
	const renderSeparator = () => <View style={styles.itemSeparator} />;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{menu.name}</Text>
			<FlatList
				data={menu.items}
				horizontal={true}
				renderItem={({ item }) => <MenuItem item={item} />}
				keyExtractor={(item) => item.name}
				showsHorizontalScrollIndicator={false}
				ItemSeparatorComponent={renderSeparator}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 26,
		marginLeft: 19,
	},
	title: {
		color: black,
		fontSize: 36,
		fontWeight: "700",
		marginBottom: 21,
	},
	itemSeparator: {
		width: 16,
	},
});

export default Menu;
