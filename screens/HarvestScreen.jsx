import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HarvestCard from "../components/HarvestCard";
import { Button, Card, Text } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { fetchPonds } from "../store/actions/actionPond";
import GraphPanen from "../components/GraphListPanen";
import SelectPond from "../components/SelectPond";
import LoadingSpinner from "../components/LoadingSpinner";

export default function HarvestScreen({ navigation }) {
  const { pond, loading } = useSelector((state) => state.ponds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPonds())
      .then(() => console.log(pond))
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SelectPond />
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
              data={pond?.harvests}
              keyExtractor={(data) => data._id}
              renderItem={({ item }) => {
                return <HarvestCard data={item} />;
              }}
            />
          </View>
        </>
      )}
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
    marginTop: 160,
  },
  graphContainer: {
    marginTop: 10,
    paddingBottom: 80,
  },
});
