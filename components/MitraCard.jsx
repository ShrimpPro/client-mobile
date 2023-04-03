import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { Button, Card, Chip, Text } from "react-native-paper";

export default function MitraCard({ data, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        title="Go to Details"
        onPress={() => navigation.navigate("Detail Mitra", { id: data.id })}
      >
        <Card mode="elevated" style={styles.card}>
          <Card.Content>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View>
                <Chip>{data.name}</Chip>
              </View>
              <View>
                <Chip>{data.pound}</Chip>
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
  },
});
