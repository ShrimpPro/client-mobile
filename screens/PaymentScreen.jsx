import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { WebView } from 'react-native-webview';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { fetchPondDetail, fetchPonds } from '../store/actions/actionPond';

export default function PaymentScreen() {
  const [donePayment, setDonePayment] = useState(false);
  const navigation = useNavigation();
  const { order } = useRoute().params;
  const dispatch = useDispatch();

  const handlerSuccess = (state) => {
    const { url } = state;
    if (url.includes('#')) {
      setDonePayment(true);
    }
  }

  const backToHome = () => {
    dispatch(fetchPonds())
      .then((ponds) => {
        return dispatch(fetchPondDetail(ponds[0]?._id));
      })
      .then(() => {
        navigation.navigate('Dashboard')
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <View style={styles.container}/>
      {
        donePayment && <View>
          <TouchableOpacity style={styles.backContainer} onPress={() => backToHome()}>
            <Text style={styles.backText}>Back to ShrimPro</Text>
          </TouchableOpacity>
        </View>
      }
      <WebView
        source={{ uri: order?.invoice }}
        style={{ flex: 1 }}
        onNavigationStateChange={handlerSuccess}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  backContainer: {
    padding: 10,
    backgroundColor: 'rgb(75, 83, 188)',
    alignItems: 'center'
  },
  backText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})