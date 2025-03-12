import { View, Image, StyleSheet, Text } from "react-native";

export default function Box(props) {
  return (
    <View style={styles.container}>
      <Image
        style={[styles.image, { backgroundColor: props.color }]}
        source={props.image}
      />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.info}>{props.info}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: "#f8f8fb",
    width: 180,
    height: 200,
  },
  image: {
    width: 60,
    height: 60,
    backgroundColor: "#000",
    padding: 7,
    borderRadius: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#363636",
    padding: 8,
  },
  info: {
    fontSize: 10,
    color: "#b7b7c1",
  },
});
