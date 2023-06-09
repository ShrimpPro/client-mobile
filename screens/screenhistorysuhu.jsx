import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button, Card, Text } from "react-native-paper";
import SuhuCard from "../components/cardHistorySuhu";

export default function HistorySuhu({ histories }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={histories}
          keyExtractor={(data) => data._id}
          renderItem={({ item }) => {
            return <SuhuCard data={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 120,
  },
});
