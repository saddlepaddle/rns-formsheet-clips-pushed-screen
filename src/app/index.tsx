import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function Home() {
	const router = useRouter();
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 16 }}>
			<Button title="Open sheet" onPress={() => router.push("/sheet")} />
			<Button title="Push detail 1 directly" onPress={() => router.push("/detail/1")} />
		</View>
	);
}
