import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [age, setAge] = useState("")
  const ageasNum: number = !isNaN(Number(age)) === true ? Number(age) : 0
  const lower: number = (220 - ageasNum) * 0.65
  const upper: number = (220 - ageasNum) * 0.85
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate limit calculator</Text>
      <Text style={styles.text}>Enter your age:</Text>
      <TextInput
        style={styles.inputBubble}
        keyboardType="number-pad"
        returnKeyType="done"
        value={age}
        onChangeText={setAge}
        placeholder=""
        placeholderTextColor="#888"
      />
      <Text style={styles.text}>
        Lower limit {lower.toFixed(2)} bpm
      </Text>

      <Text style={styles.text}>
        Upper limit {upper.toFixed(2)} bpm
      </Text>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16
  },
  heading: {
    fontSize: 32,
    marginTop: 32,
    marginBottom: 16
  },
  text: {
    marginVertical: 16
  },
  inputBubble: {
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
    paddingVertical: 12, 
    paddingHorizontal: 20,
    fontSize: 18,
    textAlign: "center",   
    marginVertical: 16,
    borderWidth: 1,
    borderColor: "#ccc",  
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,     
  }
});