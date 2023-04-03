import { View, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Graph from "../components/graph";
import Temperature from "../components/temperature";
import PH from "../components/ph";
import { useDispatch, useSelector } from "react-redux";
import { fetchPondDetail, fetchPonds } from "../store/actions/actionPond";
import LoadingSpinner from "../components/LoadingSpinner";
import SelectPond from "../components/SelectPond";

export default function SensorPhSuhu() {
  const [loading, setLoading] = useState(false);
  const { pond, loading: pondLoading } = useSelector((state) => state.ponds);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchPonds())
      .then(ponds => dispatch(fetchPondDetail(ponds[0]?._id)))
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {
        loading || pondLoading ? <LoadingSpinner /> : <>
          <SelectPond />
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
  }
});
