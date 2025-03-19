import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./navigations/RootStack";
import AppProvider from "./context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AppProvider>
  );
}
