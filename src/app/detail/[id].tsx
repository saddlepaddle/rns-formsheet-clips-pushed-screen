import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function Detail() {
	const { id } = useLocalSearchParams<{ id: string }>();
	return (
		<ScrollView
			alwaysBounceVertical
			contentContainerStyle={{ gap: 12, padding: 16 }}
			contentInsetAdjustmentBehavior="automatic"
			style={{ flex: 1 }}
		>
			<Text style={{ fontSize: 24, fontWeight: "600" }}>Detail {id}</Text>
			{[...Array(30).keys()].map((row) => (
				<Text key={row}>Row {row}</Text>
			))}
			<View style={{ borderWidth: 1, padding: 16, borderRadius: 12 }}>
				<Text accessibilityLabel="Files row">Files row (bottom)</Text>
			</View>
		</ScrollView>
	);
}
