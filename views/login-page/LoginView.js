import {
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
} from "react-native";
import Input from "./components/Input";

export default function LoginView() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Sign In</Text>
        <Input />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
    marginTop: 70,
  },
  header: {
    fontSize: 25,
    fontWeight: 700,
    padding: 20,
  },
});
