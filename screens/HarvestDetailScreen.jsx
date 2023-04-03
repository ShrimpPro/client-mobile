import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { fetchHarvestDetail } from '../store/actions/actionPond';

export default function HarvestDetailScreen() {
  const { id } = useRoute().params;
  const { harvest, loading } = useSelector((state) => state.ponds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHarvestDetail(id))
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>{harvest.capital}</Text>
      <Text>{harvest.earning}</Text>
      <Text>{harvest.quality}</Text>
      <Text>{harvest.description}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})