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
      .then(ponds => {
        if (!ponds.length) setLoading(false);
        else dispatch(fetchPondDetail(ponds[0]?._id))
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {
        loading || pondLoading ? <LoadingSpinner /> : <>
          {
            pond && pond?.pH && pond?.temp ? <>
              <SelectPond />
              <Graph histories={pond?.histories} />
              <PH pH={pond?.pH} />
              <Temperature temp={pond?.temp} />
            </> : <>
              <Text>Buy device</Text>
            </>
          }
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
