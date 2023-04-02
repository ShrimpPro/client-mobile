import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Temperature() {
  const [temperature, setTemperature] = useState(24);
  const [circleColor, setCircleColor] = useState("#4e79a7");

  useEffect(() => {
    let color;
    if (temperature >= 21 && temperature <= 25) {
      color = "#25aff3";
    } else if (temperature >= 0 && temperature <= 20) {
      color = "#0255fa";
    } else if (temperature >= 65 && temperature <= 79) {
      color = "#ffa500";
    } else if (temperature >= 80) {
      color = "#ff0303";
    } else {
      color = "#00ff00";
    }
    setCircleColor(color);
  }, [temperature]);

  return (
    <View style={styles.container}>
      <View style={[styles.circle, { backgroundColor: circleColor }]}>
        <Text style={styles.text}>{temperature}°C</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 190,
    left: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 6,
    fontSize: 15,
    fontWeight: "bold",
  },
  circle: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 150,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    color: "white",
    fontSize: 40,
  },
});
