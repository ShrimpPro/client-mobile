import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HarvestCard from "../components/HarvestCard";
import { Appbar, Button, Card, Text } from "react-native-paper";
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
    <>
      <SafeAreaView style={styles.container}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <View>
              <Text variant="headlineMedium" style={styles.headers}>
                List Panen
              </Text>
            </View>
            {pond && pond?.pH !== null && pond?.pH !== undefined && pond?.temp !== null && pond?.temp !== undefined ? (
              <>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <SelectPond />
                  <View style={styles.contentContainer}>
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
                    <View style={styles.listContainer}>
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
                  </View>
                </ScrollView>
              </>
            ) : (
              <View style={{ height: '100%' , justifyContent: 'center' }}>
                <NoDevice />
              </View>
            )}
          </>
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  textHeader: {
    textAlign: "center",
  },
  graphContainer: {
    marginVertical: 10,
  },
  button: {
    borderRadius: 5,
    fontWeight: "bold",
    paddingVertical: 5,
  },
  headers: {
    alignItems: "center",
    marginBottom: 17,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
