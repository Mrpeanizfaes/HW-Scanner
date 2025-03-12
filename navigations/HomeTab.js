import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScanPageView from "../views/scan-page/ScanPageView";
import HomeView from "../views/home-page/HomeView";
import { Ionicons } from "@expo/vector-icons";
import CustomTabButton from "../components/CustomTabButton";
import { StyleSheet } from "react-native";

export default function HomeTab({ navigation }) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        headerShown: false,
        tabBarActiveTintColor: "#4A90E2",
        tabBarInactiveTintColor: "#BBBBBB",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeView}
        options={{
          tabBarButton: (props) => (
            <CustomTabButton
              {...props}
              onPress={() => navigation.navigate("Home")}
            >
              <Ionicons name="home-outline" size={28} color="#2DC0FF" />
            </CustomTabButton>
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={ScanPageView}
        options={{
          tabBarButton: (props) => (
            <CustomTabButton
              {...props}
              onPress={() => navigation.navigate("Scanner")}
            >
              <Ionicons
                name="notifications-outline"
                size={28}
                color="#BBBBBB"
              />
            </CustomTabButton>
          ),
        }}
      />

      <Tab.Screen
        name="Scanner"
        component={ScanPageView}
        options={{
          tabBarButton: (props) => (
            <CustomTabButton
              {...props}
              onPress={() => navigation.navigate("Scanner")}
            >
              <Ionicons name="scan-outline" size={28} color="#BBBBBB" />
            </CustomTabButton>
          ),
        }}
      />

      <Tab.Screen
        name="History"
        component={ScanPageView}
        options={{
          tabBarButton: (props) => (
            <CustomTabButton
              {...props}
              onPress={() => navigation.navigate("Scanner")}
            >
              <Ionicons name="timer-outline" size={28} color="#BBBBBB" />
            </CustomTabButton>
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={ScanPageView}
        options={{
          tabBarButton: (props) => (
            <CustomTabButton
              {...props}
              onPress={() => navigation.navigate("Scanner")}
            >
              <Ionicons name="cart-outline" size={28} color="#BBBBBB" />
            </CustomTabButton>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    left: 20,
    right: 20,
    height: 118,
    backgroundColor: "#fff",
    borderRadius: 40,
    elevation: 5,
  },
});
