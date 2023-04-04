import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { WebView } from 'react-native-webview';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function PaymentScreen() {
  const [donePayment, setDonePayment] = useState(false);
  const navigation = useNavigation();
  const { order } = useRoute().params;

  const handlerSuccess = (state) => {
    const { url } = state;
    if (url.includes('#')) {
      setDonePayment(true);
    }
  }

  const backToHome = () => {
    navigation.navigate('Dashboard')
  }

  return (
    <>
      <WebView
        source={{ uri: order?.invoice }}
        style={{ flex: 1 }}
        onNavigationStateChange={handlerSuccess}
      />
      {
        donePayment && <View style={{ padding: 10, backgroundColor: 'red' }}>
          <TouchableOpacity onPress={() => backToHome()}>
            <Text>Press Mee</Text>
          </TouchableOpacity>
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({})