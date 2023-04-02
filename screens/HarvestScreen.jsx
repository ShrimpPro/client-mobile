import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HarvestCard from "../components/HarvestCard";
import { Button, Card, Text } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { fetchPonds } from "../store/actions/actionPond";
import GraphPanen from "../components/GraphListPanen";

export default function HarvestScreen({navigation}) {
  const { ponds, loading } = useSelector((state) => state.ponds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPonds())
      .catch((err) => console.log(err));
  }, []);

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
        onPress={() => navigation.navigate("Tambah Panen")}
      >
        Tambah Panen
      </Button>
      <View style={styles.graphContainer}>
        <GraphPanen />
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ponds[2]?.harvests}
          keyExtractor={(data) => data._id}
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
    marginVertical: 6,
  },
  textHeader: {
    textAlign: "center",
  },
  contentContainer: {
    marginTop: 160
  },
  graphContainer: {
    marginTop: 10,
    paddingBottom: 80,
  },
});
