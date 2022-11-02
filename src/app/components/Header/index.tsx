import { View, Image, StyleSheet } from "react-native";
import { gray } from "../../../constants/colors";
import IMAGES from "../../assets/images";

const Header = () => {
	return (
		<View style={styles.container}>
			<Image source={IMAGES.LOGO} style={styles.image} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
		justifyContent: "center",
		alignItems: "center",
		borderBottomWidth: 1,
		borderColor: gray,
	},
	image: {
		width: 108,
		height: 108,
	},
});

export default Header;
