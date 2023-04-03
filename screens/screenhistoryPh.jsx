import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button, Card, Text } from "react-native-paper";

import PhCard from "../components/cardHistoryPh";

export default function ScreenHistoryPh({ histories }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text variant="headlineMedium" style={styles.textHeader}>
          History pH
        </Text>
      </View>

      <View style={styles.contentContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={histories}
          keyExtractor={(data) => data._id}
          renderItem={({ item }) => {
            return <PhCard data={item} />;
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
