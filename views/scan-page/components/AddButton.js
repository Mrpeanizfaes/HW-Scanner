import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";
import PlusIcon from "../../../assets/icons8-plus-50.png";

export default function AddButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Image
        source={require("../../../assets/juice.png")}
        style={styles.buttonIcon}
      />
      <View style={styles.buttonTextContainer}>
        <Text style={styles.buttonText}>Lauren's</Text>
        <Text style={styles.buttonTextBold}>Orange Juice</Text>
      </View>
      <View style={styles.buttonPlusContainer}>
        <Image source={PlusIcon} style={styles.buttonPlus} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    paddingHorizontal: 20,
    shadowColor: "#AD6C48",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 2,
    shadowRadius: 107,
  },
  buttonIcon: {
    width: 53,
    height: 52,
    borderRadius: 9,
  },
  buttonTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 12,
    color: "#C2C2C2",
  },
  buttonTextBold: {
    fontSize: 16,
    fontWeight: 400,
    color: "#494949",
  },
  buttonPlusContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5A6CF3",
    borderRadius: 11,
    width: 45,
    height: 44,
  },
  buttonPlus: {
    width: 35,
    height: 35,
  },
});
