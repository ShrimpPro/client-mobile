import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHarvestDetail } from "../store/actions/actionPond";
import { Card } from "react-native-paper";
import LoadingSpinner from "../components/LoadingSpinner";
import { formatMoney, netProfit } from "../helpers";

export default function HarvestDetailScreen({ navigation }) {
  const { id } = useRoute().params;
  const { harvest, loading } = useSelector((state) => state.ponds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHarvestDetail(id)).catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <LoadingSpinner />
        </View>
      ) : (
        <View style={styles.contentContainer}>
          <Card>
            <Card.Content>
              <View style={styles.dataContainer}>
                <Text style={styles.title}>Modal Awal:</Text>
                <Text style={styles.content}>{harvest?.capital ? formatMoney(harvest.capital) : ''}</Text>
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.title}>Pendapatan:</Text>
                <Text style={styles.content}>{harvest?.earning ? formatMoney(harvest.earning) : ''}</Text>
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.title}>Laba Bersih:</Text>
                <Text style={styles.content}>{harvest?.capital && harvest?.earning ? formatMoney(netProfit(harvest.capital, harvest.earning)): ''}</Text>
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.title}>Kualitas:</Text>
                <Text style={styles.content}>{harvest?.quality}</Text>
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.title}>Deskripsi:</Text>
                <Text style={styles.content}>{harvest?.description}</Text>
              </View>
            </Card.Content>
          </Card>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textHeader: {
    textAlign: "center",
    fontSize: 25,
  },
  dataContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
  },
  contentContainer: {
    marginVertical: 25,
    marginHorizontal: 20,
    marginTop: 60
  },
});
