import { View, Text, FlatList, StyleSheet } from "react-native";
import { useQuery } from "@tanstack/react-query";
import API_ROUTES from "../../../constants/apiRoutes";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Menu from "../../components/Menu";
import { white } from "../../../constants/colors";

const Home = ({ navigation }) => {
	const { isLoading, error, data } = useQuery(["menu"], () => fetch(API_ROUTES.GET_MENU).then((res) => res.json()));

	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		return <Error />;
	}

	const goToMenuItem = (): void => {
		navigation.navigate("MenuItem");
	};

	const renderItem = ({ item }) => <Menu {...item} />;

	return (
		<View style={styles.container}>
			<FlatList
				data={data.menus}
				renderItem={renderItem}
				keyExtractor={(item) => `menu-${item.name}`}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: white,
	},
});

export default Home;
