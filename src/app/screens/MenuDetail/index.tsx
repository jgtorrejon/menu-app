import { View, Text, StyleSheet, Image } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamsList } from "../../../config/navigator";
import CustomImage from "../../components/CustomImage";
import { white } from "../../../constants/colors";

type MenuDetailRoute = RouteProp<RootStackParamsList, "MenuDetail">;

const MenuDetail = () => {
	const {
		params: { item },
	} = useRoute<MenuDetailRoute>();

	return (
		<View style={styles.container}>
			<CustomImage path={item.url} imageSize={styles.image} />
			<Text style={styles.title}>{item.name}</Text>
			<View style={styles.priceContainer}>
				<Text style={styles.priceLabel}>$ {item.price}</Text>
			</View>
			<Text style={styles.description}>{item.description}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		paddingTop: 51,
		paddingHorizontal: 14,
		backgroundColor: white,
	},
	image: {
		width: "100%",
		height: 213,
	},
	title: {
		marginTop: 48,
		fontWeight: "700",
		fontSize: 24,
		textAlign: "center",
	},
	priceContainer: {
		marginVertical: 21,
		paddingVertical: 7,
		paddingHorizontal: 25,
		borderWidth: 1,
		borderRadius: 50,
	},
	priceLabel: {
		fontSize: 16,
	},
	description: {
		fontSize: 16,
		textAlign: "center",
	},
});

export default MenuDetail;
