import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack screenOptions={{ headerShown: true, headerTransparent: true }}>
			<Stack.Screen name="index" options={{ title: "Home" }} />
			<Stack.Screen
				name="sheet"
				options={{
					title: "Sheet",
					presentation: "formSheet",
					sheetAllowedDetents: [0.5],
					sheetGrabberVisible: true,
				}}
			/>
			<Stack.Screen name="detail/[id]" options={{ title: "Detail" }} />
		</Stack>
	);
}
