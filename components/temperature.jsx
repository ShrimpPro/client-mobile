import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { tempColor } from "../helpers";

export default function Temperature({ temp }) {
  const [circleColor, setCircleColor] = useState("#4e79a7");

  useEffect(() => {
    const color = tempColor(temp);
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
    paddingVertical: 4,
    paddingHorizontal: 6,
    fontSize: 15,
    fontWeight: "bold",
  },
  circle: {
    alignItems: "center",
    justifyContent: "center",
    width: 160,
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
