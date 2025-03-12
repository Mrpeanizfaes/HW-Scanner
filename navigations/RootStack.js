import { createStackNavigator } from "@react-navigation/stack";
import ScanPageView from "../views/scan-page/ScanPageView";
import HomeTab from "./HomeTab";

export default function RootStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeTab} />
      <Stack.Screen name="Scanner" component={ScanPageView} />
    </Stack.Navigator>
  );
}
