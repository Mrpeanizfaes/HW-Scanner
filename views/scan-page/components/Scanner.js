import { View, StyleSheet } from "react-native";

export default function Scanner() {
  return (
    <View style={styles.innerContent}>
      <View style={styles.innerContentTop}>
        <View style={styles.cornerTopLeft}></View>
        <View style={styles.cornerTopRight}></View>
      </View>
      <View style={styles.innerContentBottom}>
        <View style={styles.cornerBottomLeft}></View>
        <View style={styles.cornerBottomRight}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContent: {
    height: 545,
    width: "80%",
    marginBottom: 50,
  },
  innerContentTop: {
    width: "100%",
    height: "45%",
    position: "relative",
  },
  cornerTopLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 60,
    height: 60,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: "#fff",
    borderTopLeftRadius: 35,
  },
  cornerTopRight: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 60,
    height: 60,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: "#fff",
    borderTopRightRadius: 35,
  },
  innerContentBottom: {
    borderTopWidth: 4,
    borderColor: "#fff",
    position: "relative",
    width: "100%",
    height: "55%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  cornerBottomLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 60,
    height: 60,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: "#fff",
    borderBottomLeftRadius: 35,
  },
  cornerBottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: "#fff",
    borderBottomRightRadius: 35,
  },
});
