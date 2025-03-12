import { Image, StyleSheet } from "react-native";

export default function ExploreImage(props) {
  return <Image source={props.image} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 127,
    height: 125,
    borderRadius: 16,
  },
});
