import { View, Text, StyleSheet } from "react-native";
import { white } from "../../../constants/colors";

const Error = () => {
	return (
		<View style={styles.container}>
			<Text>Oops !</Text>
			<Text>Something went wrong</Text>
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

export default Error;
