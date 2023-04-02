import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Card, Text } from "react-native-paper";

export default function PhCard({ data }) {
  return (
    <View style={styles.container}>
      <Card mode="elevated" style={styles.card}>
        <Card.Content>
          <View style={styles.dateContainer}>
            <Text variant="titleLarge">{data.date}</Text>
          </View>
          <View style={styles.footerContainer}>
            <Text variant="titleMedium" style={{ color: "#fff" }}>
              {data.kalimat}
            </Text>
          </View>
          <View style={styles.suhuContainer}>
            <Text variant="titleMedium">{data.Ph}pH</Text>
          </View>
        </Card.Content>
      </Card>
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
    left: 270,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 6,
    backgroundColor: "#ff0303",
    borderRadius: 7,
  },
  suhuContainer: {
    position: "absolute",
    bottom: 290,
    left: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
});
