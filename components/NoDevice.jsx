import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { createInvoice } from '../store/actions/actionUser';
import { useNavigation } from '@react-navigation/native';

export default function NoDevice() {
  const [showCategory, setShowCategory] = useState(false);
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const orderHandler = () => {
    setShowCategory(true);
  }

  const basicHandler = () => {
    dispatch(createInvoice('BASIC'))
      .then(order => navigation.navigate('Payment', { order }))
      .catch(err => console.log(err));
  }

  const premiumHandler = () => {
    dispatch(createInvoice('PREMIUM'))
      .then(order => navigation.navigate('Payment', { order }))
      .catch(err => console.log(err));
  }

  return (
    <View style={styles.container}>
      {
        showCategory ? <>
          <Text style={styles.title}>Select Category</Text>
          <View style={styles.category}>
            <Text style={[styles.text, { color: colors.primary }]} onPress={() => basicHandler()}>Basic</Text>
            <Text style={[styles.text, { color: colors.primary }]} onPress={() => premiumHandler()}>Premium</Text>
          </View>
        </> : <>
          <Text style={styles.title}>You don't have device yet</Text>
          <Text style={[styles.text, { color: colors.primary }]} onPress={() => orderHandler()}>Order here</Text>
        </>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 50,
    left: 50,
    top: 50,
    bottom: 50
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    marginBottom: 10
  },
  text: {
    fontFamily: "Poppins-Bold",
    marginHorizontal: 10,
    fontSize: 16
  },
})