import { View, ActivityIndicator, StyleSheet } from "react-native";
import { white, yellow } from "../../../constants/colors";

const Loader = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color={yellow} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: white,
	},
});

export default Loader;
