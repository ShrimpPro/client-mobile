import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function Graph({ histories }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View>
          <Text variant="headlineMedium" style={styles.textHeader}>
            Grafik Suhu
          </Text>
          {
            histories ?
            <>
              <LineChart
                data={{
                  labels: ["January", "February", "March", "April", "May", "June"],
                  datasets: [
                    {
                      data: histories.map(({ temp }) => temp),
                    },
                  ],
                }}
                width={350} // from react-native
                height={220}
                yAxisSuffix="C"
                yAxisInterval={1}
                chartConfig={{
                  backgroundColor: "#25aff3",
                  backgroundGradientFrom: "#25aff3",
                  backgroundGradientTo: "#25aff3",
                  decimalPlaces: 1,
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#25aff3",
                  },
                }}
                bezier={false}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                  marginHorizontal: 20,
                }}
              />
            </> : <></>
          }
        </View>
        <View>
          <Text variant="headlineMedium" style={styles.textHeader}>
            Grafik PH
          </Text>
          {
            histories ?
            <>
              <LineChart
                data={{
                  labels: ["January", "February", "March", "April", "May", "June"],
                  datasets: [
                    {
                      data: histories.map(({ pH }) => pH),
                    },
                  ],
                }}
                width={350} // from react-native
                height={220}
                yAxisSuffix="C"
                yAxisInterval={1}
                chartConfig={{
                  backgroundColor: "#25aff3",
                  backgroundGradientFrom: "#25aff3",
                  backgroundGradientTo: "#25aff3",
                  decimalPlaces: 1,
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#25aff3",
                  },
                }}
                bezier={false}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                  marginHorizontal: 20,
                }}
              />
            </> : <></>
          }
        </View>
      </ScrollView>
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
    marginTop: 10,
  },
});
