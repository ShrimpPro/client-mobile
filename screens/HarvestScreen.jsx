import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HarvestCard from "../components/HarvestCard";
import { Button, Card, Text } from "react-native-paper";
import { useSelector, useDispatch } from 'react-redux'
import { fetchPonds } from "../store/actions/actionPond";

const harvestData = [
  {
    id: 1,
    date: "2022-01-01",
    pond: 1,
    weight: 2500,
    quality: "Baik",
  },
  {
    id: 2,
    date: "2022-01-15",
    pond: 2,
    weight: 2800,
    quality: "Sangat Baik",
  },
  {
    id: 3,
    date: "2022-02-01",
    pond: 3,
    weight: 3100,
    quality: "Cukup",
  },
  {
    id: 4,
    date: "2022-02-15",
    pond: 4,
    weight: 2900,
    quality: "Baik",
  },
  {
    id: 5,
    date: "2022-03-01",
    pond: 5,
    weight: 2700,
    quality: "Kurang Baik",
  },
  {
    id: 6,
    date: "2022-03-15",
    pond: 6,
    weight: 2900,
    quality: "Baik",
  },
  {
    id: 7,
    date: "2022-04-01",
    pond: 7,
    weight: 3000,
    quality: "Baik",
  },
  {
    id: 8,
    date: "2022-04-15",
    pond: 8,
    weight: 3200,
    quality: "Sangat Baik",
  },
  {
    id: 9,
    date: "2022-05-01",
    pond: 9,
    weight: 2800,
    quality: "Sangat Baik",
  },
  {
    id: 10,
    date: "2022-05-15",
    pond: 10,
    weight: 2600,
    quality: "Baik",
  },
];

export default function HarvestScreen() {
  const { ponds, loading } = useSelector(state => state.ponds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPonds())
      .then(() => console.log(ponds, loading))
      .catch(err => console.log(err));
  }, [])
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text variant="headlineMedium" style={styles.textHeader}>
          List Panen
        </Text>
      </View>
      <Button
        icon="check"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Tambah Panen
      </Button>
      <View style={styles.contentContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={harvestData}
          keyExtractor={(data) => data.id}
          renderItem={({ item }) => {
            return <HarvestCard data={item} />;
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
  },
  contentContainer: {
    marginTop: 10,
    paddingBottom: 80,
  },
});
