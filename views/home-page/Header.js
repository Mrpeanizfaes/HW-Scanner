import { StyleSheet, Text, View, Image } from "react-native";
import donutImage from "../../assets/donut.png";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Text style={styles.title}>Hello👋</Text>
        <Text>Trần Nam Hải</Text>
      </View>
      <View style={styles.headerRight}>
        <Image source={donutImage} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    marginTop: 30,
    backgroundColor: "white",
  },
  headerLeft: {
    flexDirection: "column",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  headerRight: {
    flexDirection: "column",
  },
  image: {
    width: 50,
    height: 50,
  },
});
