import { View, StyleSheet, Text, Image } from "react-native";
import Box from "./components/Box";
import Arrow from "../../assets/icons8-arrow-50.png";
import ExploreImage from "./components/ExploreImage";

export default function Content() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Insights</Text>
      <View style={styles.row1}>
        <Box
          image={require("../../assets/icons8-scanner-48.png")}
          title="Scan new"
          info="Scanned 483"
          color="#dbdaf7"
        />
        <Box
          image={require("../../assets/icons8-warning-26.png")}
          title="Counterfeits"
          info="Counterfeited 32"
          color="#f6e3db"
        />
      </View>
      <View style={styles.row1}>
        <Box
          image={require("../../assets/icons8-success-64.png")}
          title="Success"
          info="Checkouts 8"
          color="#D8F3F1"
        />
        <Box
          image={require("../../assets/icons8-calendar-24.png")}
          title="Directory"
          info="History 26"
          color="#D0EDFB"
        />
      </View>
      <View style={styles.explore}>
        <Text style={styles.title}>Explore More</Text>
        <Image style={styles.arrow} source={Arrow} />
      </View>
      <View style={styles.row2}>
        <ExploreImage image={require("../../assets/milk.jpg")} />
        <ExploreImage image={require("../../assets/bottle.jpg")} />
        <ExploreImage image={require("../../assets/straw.jpg")} />
      </View>
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    gap: 25,
  },
  title: {
    alignSelf: "flex-start",
    justifySelf: "flex-start",
    fontSize: 18,
  },
  row1: {
    justifyContent: "space-around",
    gap: 25,
    flexDirection: "row",
    padding: 0,
    margin: 0,
  },
  row2: {
    justifyContent: "space-around",
    gap: 25,
    flexDirection: "row",
    padding: 0,
    margin: 0,
    marginLeft: 60,
  },
  explore: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  arrow: {
    width: 40,
    height: 40,
  },
});
