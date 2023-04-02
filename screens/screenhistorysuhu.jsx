import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button, Card, Text } from "react-native-paper";
import SuhuCard from "../components/cardHistorySuhu";

const DataSuhu = [
  {
    id: 1,
    date: "2022-01-01",
    suhu: 100,
    kalimat: "Panas",
  },
  {
    id: 2,
    date: "2022-01-01",
    suhu: 20,
    kalimat: "Dingin",
  },
  {
    id: 3,
    date: "2022-01-01",
    suhu: 70,
    kalimat: "panas",
  },
  {
    id: 4,
    date: "2022-01-01",
    suhu: 24,
    kalimat: "Normal",
  },
  {
    id: 5,
    date: "2022-01-01",
    suhu: 70,
    kalimat: "panas",
  },
  {
    id: 6,
    date: "2022-01-01",
    suhu: 700,
    kalimat: "panas",
  },
  {
    id: 7,
    date: "2022-01-01",
    suhu: 70,
    kalimat: "Normal",
  },
  {
    id: 8,
    date: "2022-01-01",
    suhu: 20,
    kalimat: "Normal",
  },
  {
    id: 9,
    date: "2022-01-01",
    suhu: 70,
    kalimat: "Normal",
  },
  {
    id: 10,
    date: "2022-01-01",
    suhu: 70,
    kalimat: "Normal",
  },
];

export default function HistorySuhu() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text variant="headlineMedium" style={styles.textHeader}>
          History Suhu
        </Text>
      </View>

      <View style={styles.contentContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DataSuhu}
          keyExtractor={(data) => data.id}
          renderItem={({ item }) => {
            return <SuhuCard data={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    marginVertical: 10,
  },
  textHeader: {
    textAlign: "center",
    marginTop: 10,
  },
  contentContainer: {
    marginTop: 20,
    paddingBottom: 80,
  },
  graphContainer: {
    paddingBottom: 80,
  },
});
