import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { Button, Card, Chip, Text } from "react-native-paper";
import { pondCategory } from "../helpers";

export default function MitraCard({ data, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        title="Go to Details"
        onPress={() => navigation.navigate("Detail Mitra", { id: data._id })}
      >
        <Card mode="elevated" style={styles.card}>
          <Card.Content>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View>
                <Chip>{data.email}</Chip>
              </View>
              <View>
                <Chip>{pondCategory(data.ponds)}</Chip>
              </View>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  card: {
    marginHorizontal: 15,
    marginVertical: 10
  }
});
