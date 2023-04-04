import React from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { harvestDates, netProfit, profitPerMillion } from "../helpers";

export default function GraphPanen({ harvests }) {
  return (
    <View style={{ flex: 1 }}>
      {
        harvests ? <>
          <BarChart
          data={{
            labels: harvestDates(harvests),
            datasets: [
              {
                data: harvests?.map(({ capital, earning }) => profitPerMillion(netProfit(capital, earning))),
              },
            ],
          }}
          width={350} // from react-native
          height={220}
          yAxisLabel="Rp "
          yAxisSuffix="jt"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#664279",
            backgroundGradientFrom: "#664279",
            backgroundGradientTo: "#664279",
            decimalPlaces: 0,
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
        </> : <></>
      }
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
