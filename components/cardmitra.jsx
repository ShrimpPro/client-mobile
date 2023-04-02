import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { Button, Card, Text } from "react-native-paper";

export default function MitraCard({ data, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        title="Go to Details"
        onPress={() => navigation.navigate("DetailMitra", { id: data.id })}
      >
        <Card mode="elevated" style={styles.card}>
          <Card.Content>
            <View style={styles.dateContainer}>
              <Text variant="titleLarge">{data.name}</Text>
            </View>
            <View style={styles.footerContainer}>
              <Text variant="titleMedium">{data.pound}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  card: {
    backgroundColor: "white",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  footerContainer: {
    position: "absolute",
    bottom: 290,
    left: 220,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 7,
  },
});
