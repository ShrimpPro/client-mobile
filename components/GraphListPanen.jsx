import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
import { LineChart, BarChart } from "react-native-chart-kit";

export default function GraphPanen() {
  const [data1, setData1] = useState([
    { suhu: 210 },
    { suhu: 230 },
    { suhu: 240 },
    { suhu: 270 },
    { suhu: 290 },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <Text>Bezier Line Chart</Text>

      <BarChart
        data={{
          labels: ["January", "February", "March", "April", "May"],
          datasets: [
            {
              data: data1.map(({ suhu }) => suhu),
            },
          ],
        }}
        width={370} // from react-native
        height={220}
        // yAxisLabel="$"
        // yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#664279",
          backgroundGradientFrom: "#664279",
          backgroundGradientTo: "#664279",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  card: {
    backgroundColor: "white",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  footerContainer: {
    marginTop: 5,
  },
  textHeader: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 70,
  },
});
