import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Card, Text } from 'react-native-paper';
import { formatDate, formatMoney } from '../helpers';

export default function HarvestCard({ data }) {
  return (
    <View style={styles.container}>
      <Card mode='elevated' style={styles.card}>
        <Card.Content>
          <View style={styles.dateContainer}>
            <Text variant="titleLarge">Panen </Text>
            <Text variant="titleLarge">{formatDate(data.createdAt)}</Text>
          </View>
          <View style={styles.footerContainer}>
            <Text variant="titleMedium">Modal: {formatMoney(data.capital)}</Text>
            <Text variant="titleMedium">Pendapatan: {formatMoney(data.earning)}</Text>
            <Text variant="titleMedium">Kualitas: {data.quality}</Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    borderColor: '#eee',
    borderWidth: 1
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  footerContainer: {
    marginTop: 5
  }
})