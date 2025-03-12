import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";

export default function CustomTabButton({ children, onPress }) {
  const isFocused = useIsFocused();

  return (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <View
        style={[
          styles.innerButton,
          { backgroundColor: isFocused ? "#D0EDFBCC" : "#FFF" },
        ]}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  customButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  innerButton: {
    width: 47,
    height: 47,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
