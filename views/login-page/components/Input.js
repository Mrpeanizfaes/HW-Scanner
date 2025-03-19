import { useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import Button from "./Button";

export default function Input() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email ID</Text>
      <TextInput
        placeholder="Enter your email here!"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Enter your password here!"
        keyboardType="default"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry={true}
      />
      <Text style={styles.forgot}>Forgot password?</Text>
      <Button email={email} password={password} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItem: "center",
    width: "100%",
    gap: 20,
    padding: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 500,
  },
  input: {
    borderColor: "#a8a8a8",
    borderWidth: 1.5,
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 7,
  },
  forgot: {
    alignSelf: "flex-end",
    fontWeight: 700,
    color: "#ff9819",
  },
});
