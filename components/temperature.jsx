import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Temperature({ temp }) {
  const [circleColor, setCircleColor] = useState("#4e79a7");

  useEffect(() => {
    let color;
    if (temp >= 21 && temp <= 25) {
      color = "#25aff3";
    } else if (temp >= 0 && temp <= 20) {
      color = "#0255fa";
    } else if (temp >= 65 && temp <= 79) {
      color = "#ffa500";
    } else if (temp >= 80) {
      color = "#ff0303";
    } else {
      color = "#00ff00";
    }
    setCircleColor(color);
  }, [temp]);

  return (
    <View style={styles.container}>
      <View style={[styles.circle, { backgroundColor: circleColor }]}>
        <Text style={styles.text}>{temp}°C</Text>
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
