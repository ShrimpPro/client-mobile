import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Graph from "../components/graph";
import Temperature from "../components/temperature";
import PH from "../components/ph";

export default function SensorPhSuhu() {
  return (
    <SafeAreaView style={styles.container}>
      <Graph />
      <PH />
      <Temperature />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
