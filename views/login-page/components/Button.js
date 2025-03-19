import {
  TouchableOpacity,
  Image,
  Text,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import GoogleLogo from "../../../assets/icon-google.png";
import FacebookLogo from "../../../assets/icon-facebook.png";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

export default function Button({ email, password }) {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  const validate = () => {
    if (email === "admin@gmail.com" && password === "admin123") {
      Alert.alert("Success", "Login successful!");
      setIsLoggedIn(true);
    } else {
      Alert.alert("Error", "Invalid email or password.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.signinBtn} onPress={validate}>
        <Text style={[styles.defaultText, { color: "#fff" }]}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.defaultText}>Or sign in with</Text>
      <View style={styles.oauth2Container}>
        <TouchableOpacity
          style={[
            styles.oauth2Btn,
            {
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "#a8a8a8",
            },
          ]}
        >
          <Image style={styles.logo} source={GoogleLogo} />
          <Text style={[styles.defaultText, { color: "#000" }]}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.oauth2Btn, { backgroundColor: "#4850A0" }]}
        >
          <Image style={styles.logo} source={FacebookLogo} />
          <Text style={[styles.defaultText, { color: "#fff" }]}>Facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.lightText}>Not yet a member?</Text>
        <Text style={[styles.defaultText, { color: "#ff9819" }]}>Sign Up</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  signinBtn: {
    width: "100%",
    borderRadius: 7,
    backgroundColor: "#ff9819",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  lightText: {
    fontSize: 15,
    fontWeight: 500,
  },
  defaultText: {
    fontSize: 15,
    fontWeight: 700,
  },
  oauth2Container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  oauth2Btn: {
    flex: 1,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 10,
  },
  logo: {
    width: 20,
    height: 20,
    backgroundColor: "#fff",
    borderRadius: "50%",
  },
  textContainer: {
    flexDirection: "row",
    gap: 5,
  },
});
