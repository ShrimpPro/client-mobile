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

export default function MitraListScreen({ navigation }) {
  const { users, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {
        loading ? <LoadingSpinner /> : <>
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={users}
              keyExtractor={(data) => data._id}
              renderItem={({ item }) => {
                return item.membership ? <MitraCard data={item} navigation={navigation} /> : <></>;
              }}
            />
          </View>
        </>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
