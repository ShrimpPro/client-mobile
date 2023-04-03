import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PH({ pH }) {
  const [circleColor, setCircleColor] = useState("#4e79a7");

  useEffect(() => {
    let color;
    if (pH >= 3 && pH <= 5) {
      color = "#ffa500";
    } else if (pH >= 0 && pH <= 2) {
      color = "#ff0303";
    } else if (pH >= 9 && pH <= 11) {
      color = "#0255fa";
    } else if (pH >= 12) {
      color = "#482060";
    } else {
      color = "#008000";
    }
    setCircleColor(color);
  }, [pH]);

  return (
    <View style={styles.container}>
      <View style={[styles.circle, { backgroundColor: circleColor }]}>
        <Text style={styles.text}>{pH}pH</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 90,
    left: 207,
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
    fontSize: 35,
  },
});
