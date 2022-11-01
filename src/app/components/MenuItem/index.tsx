import { View, Text, StyleSheet, Image, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuItemType from "../../../interfaces/menuItemInterface";
import { gray } from "../../../constants/colors";

interface MenuItemProps {
	item: MenuItemType;
}

const MenuItem = ({ item }: MenuItemProps) => {
	const navigation = useNavigation();

	const goToDetail = () => {
		navigation.navigate("MenuDetail", { item: item });
	};

	return (
		<TouchableHighlight onPress={goToDetail} underlayColor={gray}>
			<View style={styles.container}>
				<Image source={{ uri: item.url }} style={styles.image} />
				<Text style={styles.name}>{item.name}</Text>
			</View>
		</TouchableHighlight>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: gray,
		borderRadius: 5,
		width: 160,
		height: 160,
	},
	image: {
		width: 100,
		height: 100,
		resizeMode: "contain",
		marginHorizontal: 30,
	},
	name: {
		marginTop: 26,
		marginBottom: 26,
		textAlign: "center",
	},
});

export default MenuItem;
