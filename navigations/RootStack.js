import { createStackNavigator } from "@react-navigation/stack";
import ScanPageView from "../views/scan-page/ScanPageView";
import HomeTab from "./HomeTab";
import LoginView from "../views/login-page/LoginView";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function RootStack() {
  const Stack = createStackNavigator();
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Home" component={HomeTab} />
          <Stack.Screen name="Scanner" component={ScanPageView} />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginView} />
      )}
    </Stack.Navigator>
  );
}
