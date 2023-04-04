import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button, Card, Chip, Text } from "react-native-paper";
import { formatDate, formatMoney, netProfit } from "../helpers";
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
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text variant="titleLarge" style={{ fontWeight: "bold" }}>
                  Panen {formatDate(data.createdAt)}
                </Text>
              </View>
              <View>
                <Chip>{data.quality}</Chip>
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
});
