import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuItemType from "../../../interfaces/menuItemInterface";
import CustomImage from "../CustomImage";
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
				<CustomImage
					path={item.url}
					imageSize={styles.imageSize}
					imageStyle={styles.imageStyle}
				/>
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
	imageSize: {
		width: 100,
		height: 100,
	},
	imageStyle: {
		resizeMode: "contain",
		marginHorizontal: 30,
	},
	name: {
		marginTop: 20,
		marginBottom: 26,
		textAlign: "center",
	},
});

export default MenuItem;
