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
import NoDevice from "../components/NoDevice";
import { ScrollView } from "react-native-gesture-handler";

export default function HarvestScreen({ navigation }) {
  const { pond, loading } = useSelector((state) => state.ponds);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {pond && pond?.pH && pond?.temp ? (
            <>
              <SelectPond />
              <ScrollView>
                <Button
                  icon="text-box-plus"
                  mode="contained"
                  style={styles.button}
                  uppercase={true}
                  onPress={() => navigation.navigate("Tambah Panen")}
                >
                  Tambah Panen
                </Button>
                <View style={styles.graphContainer}>
                  <GraphPanen harvests={pond?.harvests} />
                </View>
                <View style={styles.contentContainer}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    data={pond?.harvests}
                    keyExtractor={(data) => data._id}
                    renderItem={({ item }) => {
                      return <HarvestCard data={item} />;
                    }}
                  />
                </View>
              </ScrollView>
            </>
          ) : (
            <NoDevice />
          )}
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    marginVertical: 6,
  },
  textHeader: {
    textAlign: "center",
  },
  graphContainer: {
    marginTop: 10,
  },
  button: {
    borderRadius: 5,
    fontWeight: "bold",
  },
});
