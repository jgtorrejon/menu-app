import "react-native-gesture-handler";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import App from "./src/app";

const queryClient = new QueryClient();

export default function index() {
	return (
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	);
}
