import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchHarvestDetail } from "../store/actions/actionPond";
import { Card } from "react-native-paper";

export default function HarvestDetailScreen({navigation}) {
  const { id } = useRoute().params;
  const { harvest, loading } = useSelector((state) => state.ponds);
  const dispatch = useDispatch();

  useEffect(() => {
    // navigation.setOptions({ title: data?.movieDetail.title });
    dispatch(fetchHarvestDetail(id)).catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Card>
          <Card.Content>
            <View style={styles.dataContainer}>
              <Text style={styles.title}>Modal Awal:</Text>
              <Text style={styles.content}>{harvest.capital}</Text>
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.title}>Pendapatan:</Text>
              <Text style={styles.content}>{harvest.earning}</Text>
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.title}>Kualitas:</Text>
              <Text style={styles.content}>{harvest.quality}</Text>
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.title}>Deskripsi:</Text>
              <Text style={styles.content}>{harvest.description}</Text>
            </View>
          </Card.Content>
        </Card>
      </View>
      {/* <Card>
        <Text>{harvest.capital}</Text>
        <Text>{harvest.earning}</Text>
        <Text>{harvest.quality}</Text>
        <Text>{harvest.description}</Text>
      </Card> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: 350,
    height: 220,
    marginVertical: 8,
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  wrapdot: {
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "black",
  },
  dot: {
    margin: 3,
    color: "#808080",
  },
  textHeader: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 60,
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
  },
});
