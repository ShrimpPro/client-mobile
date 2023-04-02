import { ScrollView, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Graph from "../components/graph";
import Temperature from "../components/temperature";
import PH from "../components/ph";
import { useDispatch, useSelector } from "react-redux";
import { fetchPonds } from "../store/actions/actionPond";
import LoadingSpinner from "../components/LoadingSpinner";

export default function SensorPhSuhu() {
  const { ponds, loading } = useSelector((state) => state.ponds);
  const [ a, b, pond ] = ponds;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPonds())
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {
        loading ? <LoadingSpinner /> : <>
          <Graph histories={pond?.histories} />
          <PH pH={pond?.pH} />
          <Temperature temp={pond?.temp} />
        </>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
