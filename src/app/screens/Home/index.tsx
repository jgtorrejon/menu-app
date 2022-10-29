import { View, Text, Button } from "react-native";
import { useQuery } from "@tanstack/react-query";
import ROUTES from "../../../constants/routes";

const Home = ({navigation}) => {
	const {isLoading, error, data} = useQuery(['menu'], () =>
		fetch(ROUTES.GET_MENU).then(res => res.json())
	);

	const goToMenuItem = () => {
		navigation.navigate("MenuItem");
	};

	return (
		<View>
			<Text>Hola que hace HOME !</Text>
			<Button onPress={goToMenuItem} title="Ir a detalle" />
		</View>
	);
};

export default Home;
