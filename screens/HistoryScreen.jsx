import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Swiper from "react-native-swiper";
import HistorySuhu from "./screenhistorysuhu";
import ScreenHistoryPh from "./screenhistoryPh";
import { useSelector } from "react-redux";
import SelectPond from "../components/SelectPond";
import LoadingSpinner from "../components/LoadingSpinner";
import NoDevice from "../components/NoDevice";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HistoryScreen() {
  const { pond, loading } = useSelector((state) => state.ponds);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {pond && pond?.pH !== null && pond?.pH !== undefined && pond?.temp !== null && pond?.temp !== undefined ? (
            <>
              <View>
                <Text variant="headlineMedium" style={styles.headers}>
                  History
                </Text>
              </View>
              <SelectPond />
              <View style={styles.contentContainer}>
                <Swiper
                  style={styles.wrapper}
                  loop={false}
                  showsPagination={false}
                >
                  <View style={styles.slide}>
                    <HistorySuhu histories={pond?.histories} />
                  </View>
                  <View style={styles.slide}>
                    <ScreenHistoryPh histories={pond?.histories} />
                  </View>
                </Swiper>
              </View>
            </>
          ) : (
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <NoDevice />
            </View>
          )}
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    height: "100%",
  },
  headers: {
    alignItems: "center",
    marginBottom: 17,
    marginTop: 14,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
