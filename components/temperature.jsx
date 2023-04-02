import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPonds } from "../store/actions/actionPond";

export default function Temperature() {
  const { ponds } = useSelector((state) => state.ponds);
  const dispatch = useDispatch();
  const [circleColor, setCircleColor] = useState("#4e79a7");

  useEffect(() => {
    dispatch(fetchPonds())
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let color;
    if (ponds[2]?.temp >= 21 && ponds[2]?.temp <= 25) {
      color = "#25aff3";
    } else if (ponds[2]?.temp >= 0 && ponds[2]?.temp <= 20) {
      color = "#0255fa";
    } else if (ponds[2]?.temp >= 65 && ponds[2]?.temp <= 79) {
      color = "#ffa500";
    } else if (ponds[2]?.temp >= 80) {
      color = "#ff0303";
    } else {
      color = "#00ff00";
    }
    setCircleColor(color);
  }, [ponds[2]?.temp]);

  return (
    <View style={styles.container}>
      <View style={[styles.circle, { backgroundColor: circleColor }]}>
        <Text style={styles.text}>{ponds[2]?.temp}°C</Text>
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
