import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Card, Text } from "react-native-paper";
import { formatDate, phCategory, phColor } from "../helpers";

export default function PhCard({ data }) {
  return (
    <View style={styles.container}>
      <Card mode="elevated">
        <Card.Content style={styles.card}>
          <View style={styles.dateContainer}>
            <Text variant="titleLarge">{formatDate(data.createdAt)}</Text>
          </View>
          <View style={styles.suhuContainer}>
            <Text variant="titleMedium">{data.pH}pH</Text>
          </View>
          <View style={[styles.footerContainer, { backgroundColor: phColor(data.pH) }]}>
            <Text variant="titleMedium" style={{ color: 'white' }}>
              {phCategory(data.pH)}
            </Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: 350
  },
  card: {
    backgroundColor: "white",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  dateContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  footerContainer: {
    width: 100,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 7,
  },
  suhuContainer: {
    paddingVertical: 4,
    paddingHorizontal: 30,
  },
});
