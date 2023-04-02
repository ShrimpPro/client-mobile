import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HarvestCard from "../components/HarvestCard";
import { Button, Card, Text } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { fetchPonds } from "../store/actions/actionPond";
import MitraCard from "../components/cardmitra";

const harvestData = [
  {
    id: 1,
    name: "mitra1",
    pound: "Tambak besar",
  },
  {
    id: 2,
    name: "mitra1",
    pound: "Tambak besar",
  },
  {
    id: 3,
    name: "mitra1",
    pound: "Tambak besar",
  },
  {
    id: 4,
    name: "mitra1",
    pound: "Tambak besar",
  },
  {
    id: 5,
    name: "mitra1",
    pound: "Tambak besar",
  },
  {
    id: 6,
    name: "mitra1",
    pound: "Tambak besar",
  },
  {
    id: 7,
    name: "mitra1",
    pound: "Tambak besar",
  },
  {
    id: 8,
    name: "mitra1",
    pound: "Tambak besar",
  },
  {
    id: 9,
    name: "mitra1",
    pound: "Tambak besar",
  },
  {
    id: 10,
    name: "mitra1",
    pound: "Tambak besar",
  },
];

export default function ListMitra({ navigation }) {
  const { ponds, loading } = useSelector((state) => state.ponds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPonds())
      .then(() => console.log(ponds, loading))
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text variant="headlineMedium" style={styles.textHeader}>
          page Khusus penadah
        </Text>
      </View>

      <View style={styles.contentContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={harvestData}
          keyExtractor={(data) => data.id}
          renderItem={({ item }) => {
            return <MitraCard data={item} navigation={navigation} />;
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
    marginVertical: 6,
  },
  textHeader: {
    textAlign: "center",
  },
  contentContainer: {
    paddingBottom: 80,
  },
  graphContainer: {
    marginTop: 10,
    paddingBottom: 80,
  },
});
