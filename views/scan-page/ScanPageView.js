import React from "react";
import { ScrollView, View, StyleSheet, ImageBackground } from "react-native";
import BackButton from "./components/BackButton";
import AddButton from "./components/AddButton";
import Scanner from "./components/Scanner";

export default function ScanPageView() {
  return (
    <ImageBackground
      source={require("../../assets/juice.png")}
      style={styles.background}
    >
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <BackButton />
          <Scanner />
          <AddButton />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
  },
  content: {
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
