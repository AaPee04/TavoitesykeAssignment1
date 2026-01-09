import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
    const [age, setAge] = useState<string>("")
    const ageasNum: number = !isNaN(Number(age)) === true ? Number(age) : 0
    const lower: number = (220-ageasNum) * 0.65
    const upper: number = (220-ageasNum) * 0.85
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Heart Rate limit calculator</Text>
            <TextInput
                keyboardType="number-pad"
                value={age}
                onChangeText={setAge}
            />
            <Text style={styles.text}>Lower limit<></>{lower.toFixed(2)} bpm</Text>
            <Text style={styles.text}>Upper limit<></>{upper.toFixed(2)} bpm</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16
    },
    heading: {
        fontSize: 24,
        marginTop: 32,
        marginBottom: 16
    },
    text: {
        marginVertical: 16
    }
});