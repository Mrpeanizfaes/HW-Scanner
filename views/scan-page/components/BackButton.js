import { TouchableOpacity, Image, StyleSheet } from "react-native";
import BackIcon from "../../../assets/icons8-back-50.png";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.backBtn}
      onPress={() => navigation.goBack()}
    >
      <Image source={BackIcon} style={styles.backIcon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    justifySelf: "flex-start",
    alignSelf: "flex-start",
    margin: 30,
    marginVertical: 70,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 10,
    borderRadius: 9,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
});
