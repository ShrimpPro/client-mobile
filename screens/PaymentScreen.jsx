import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';

export default function PaymentScreen() {
  const { order } = useRoute().params;

  return (
    <WebView
      source={{ uri: order?.invoice }}
      style={{ flex: 1 }}
    />
  )
}

const styles = StyleSheet.create({})