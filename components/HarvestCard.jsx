import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button, Card, Text } from 'react-native-paper';
import { formatDate, formatMoney, netProfit } from '../helpers';
import { useNavigation } from '@react-navigation/native';

export default function HarvestCard({ data }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail Harvest', { id: data._id })}>
      <View style={styles.container}>
        <Card mode='elevated' style={styles.card}>
          <Card.Content>
            <View style={styles.dateContainer}>
              <Text variant="titleLarge">Panen </Text>
              <Text variant="titleLarge">{formatDate(data.createdAt)}</Text>
            </View>
            <View style={styles.footerContainer}>
              <Text variant="titleMedium">Laba Bersih: {formatMoney(netProfit(data.capital, data.earning))}</Text>
              <Text variant="titleMedium">Kualitas: {data.quality}</Text>
            </View>
          </Card.Content>
        </Card>
      </View>
    </TouchableOpacity>
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