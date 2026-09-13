import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";

export default function Sheet() {
	const router = useRouter();
	return (
		<ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, paddingTop: 72 }}>
			{["1", "2"].map((id) => (
				<Pressable
					accessibilityLabel={`Row ${id}`}
					accessibilityRole="button"
					key={id}
					onPress={() => router.replace({ pathname: "/detail/[id]", params: { id } })}
					style={{ paddingVertical: 16 }}
				>
					<Text style={{ fontSize: 17 }}>Open detail {id}</Text>
				</Pressable>
			))}
		</ScrollView>
	);
}
