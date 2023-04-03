import React from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import HistorySuhu from './screenhistorysuhu';
import ScreenHistoryPh from './screenhistoryPh';
import { useSelector } from 'react-redux';
import SelectPond from '../components/SelectPond';
import LoadingSpinner from '../components/LoadingSpinner';
import NoDevice from '../components/NoDevice';

export default function HistoryScreen() {
  const { pond, loading } = useSelector((state) => state.ponds);

  return (
    <View style={styles.container}>
      {
        loading ? <LoadingSpinner /> : <>
          {
            pond && pond?.pH && pond?.temp ? <>
              <SelectPond />
              <Swiper style={styles.wrapper} loop={false} showsPagination={false}>
                <View style={styles.slide}>
                  <HistorySuhu histories={pond?.histories} />
                </View>
                <View style={styles.slide}>
                  <ScreenHistoryPh histories={pond?.histories} />
                </View>
              </Swiper>
            </> : <NoDevice />
          }
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
