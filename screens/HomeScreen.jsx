import { View, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Graph from "../components/graph";
import Temperature from "../components/temperature";
import PH from "../components/ph";
import { useDispatch, useSelector } from "react-redux";
import { fetchPondDetail, fetchPonds } from "../store/actions/actionPond";
import LoadingSpinner from "../components/LoadingSpinner";
import SelectPond from "../components/SelectPond";
import NoDevice from "../components/NoDevice";
import { Appbar, useTheme } from "react-native-paper";

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const { pond, loading: pondLoading } = useSelector((state) => state.ponds);
  const dispatch = useDispatch();
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchPonds())
      .then((ponds) => {
        if (!ponds.length) setLoading(false);
        else dispatch(fetchPondDetail(ponds[0]?._id));
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        {loading || pondLoading ? (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <LoadingSpinner />
          </View>
        ) : (
          <View>
            {pond && pond?.pH && pond?.temp ? (
              <>
                <SelectPond />
                <View style={styles.contentContainer}>
                  <Graph histories={pond?.histories} />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingHorizontal: 15,
                      paddingTop: 50
                    }}
                  >
                    <PH pH={pond?.pH} />
                    <Temperature temp={pond?.temp} />
                  </View>
                </View>
              </>
            ) : (
              <NoDevice />
            )}
          </View>
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
  contentContainer: {
    justifyContent: 'space-around'
  }
});
