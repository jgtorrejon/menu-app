import { View, FlatList, StyleSheet } from "react-native";
import { useQuery } from "@tanstack/react-query";
import API_ROUTES from "../../../constants/apiRoutes";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Menu from "../../components/Menu";
import { white } from "../../../constants/colors";

const Home = () => {
	const { isLoading, error, data } = useQuery(["menu"], () =>
		fetch(API_ROUTES.GET_MENU).then((res) => res.json())
	);

	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		return <Error />;
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={data.menus}
				renderItem={({ item }) => <Menu menu={item} />}
				keyExtractor={(item) => `menu-${item.name}`}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: white,
		paddingBottom: 15,
	},
});

export default Home;
