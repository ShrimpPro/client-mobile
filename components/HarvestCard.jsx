import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button, Card, Chip, Text } from "react-native-paper";
import { categoryColor, formatDate, formatMoney, netProfit } from "../helpers";
import { useNavigation } from "@react-navigation/native";

export default function HarvestCard({ data }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail Harvest", { id: data._id })}
    >
      <View style={styles.container}>
        <Card mode="elevated" style={styles.card}>
          <Card.Content>
            <View
              style={styles.headerContainer}
            >
              <View>
                <Text variant="titleLarge" style={{ fontWeight: "bold" }}>
                  {formatDate(data.createdAt)}
                </Text>
              </View>
              <View>
                <Chip style={[styles.categoryContainer, { backgroundColor: categoryColor(data.quality) }]}>
                  <Text style={styles.categoryText}>{data.quality}</Text>
                </Chip>
              </View>
            </View>
            <View style={styles.footerContainer}>
              <Text variant="titleMedium">
                Laba Bersih:{" "}
                {formatMoney(netProfit(data.capital, data.earning))}
              </Text>
            </View>
          </Card.Content>
        </Card>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  card: {
    backgroundColor: "white",
    borderColor: "#eee",
    borderWidth: 1,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  footerContainer: {
    marginTop: 5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  categoryContainer: {
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryText: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold"
  }
});
