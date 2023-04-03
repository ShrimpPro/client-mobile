import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HarvestCard from "../components/HarvestCard";
import { Button, Card, Text } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { fetchPonds } from "../store/actions/actionPond";
import MitraCard from "../components/MitraCard";
import { fetchUsers } from "../store/actions/actionUser";
import LoadingSpinner from "../components/LoadingSpinner";

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

export default function MitraListScreen({ navigation }) {
  const { user, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
      .then(() => console.log(user, loading))
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? <LoadingSpinner /> : <></>}

      <View>
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
    paddingHorizontal: 10,
  },
});
