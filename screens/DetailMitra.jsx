import React, { useState } from "react";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from "react-native";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQThSwdOK63x8NyN6a1QKigWSvktFZ1hvnMxQ&usqp=CAU",
  "https://radarbromo.jawapos.com/wp-content/uploads/2021/09/f-4-bangil-BOX-budidaya-udang-kolam-terpal.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTK6IZyou_N1hq86yPvFL6UQA5v36z0eUpTw&usqp=CAU",
];

export default function DetailMitra() {
  const [img, setImg] = useState(0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != img) {
        setImg(slide);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textHeader}>Profil Mitra</Text>
      <View style={{ marginTop: 50 }}>
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
        >
          {images.map((e, index) => (
            <Image
              key={e}
              resizeMode="stretch"
              style={styles.wrap}
              source={{ uri: e }}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.wrapdot}>
        {images.map((e, index) => (
          <Text key={e} style={img == index ? styles.dotActive : styles.dot}>
            ●
          </Text>
        ))}
      </View>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.tambakSection}>
            <Text style={styles.title}>Jenis Tambak:</Text>
            <Text style={styles.content}>jesin tambak</Text>
          </View>
          <View style={styles.panenSection}>
            <Text style={styles.title}>Kapasitas Panen:</Text>
            <Text style={styles.content}>kapasitas panens</Text>
          </View>

          <View style={styles.mitraSection}>
            <Text style={styles.title}>Detail Entitas Mitra:</Text>
            <Text style={styles.content}>
              Warna lightgray / Abu-abu Muda dengan kode warna heksadesimal
              #d3d3d3 adalah cahaya bayangan dari abu-abu. Dalam model warna RGB
              #d3d3d3 terdiri dari 82.75% merah, 82.75% hijau dan 82.75% biru.
              Di ruang warna HSL #d3d3d3 memiliki hue 0° (derajat), 0% saturasi
              dan 83% penerangan. Warna ini memiliki panjang gelombang sekitar 0
              nm. Warna lightgray / Abu-abu Muda dengan kode warna heksadesimal
              #d3d3d3 adalah cahaya bayangan dari abu-abu. Dalam model warna RGB
              #d3d3d3 terdiri dari 82.75% merah, 82.75% hijau dan 82.75% biru.
              Di ruang warna HSL #d3d3d3 memiliki hue 0° (derajat), 0% saturasi
              dan 83% penerangan. Warna ini memiliki panjang gelombang sekitar 0
              nm.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: 350,
    height: 220,
    marginVertical: 8,
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 50,
  },
  wrapdot: {
    position: "absolute",
    bottom: 250,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "black",
  },
  dot: {
    margin: 3,
    color: "#808080",
  },
  textHeader: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 60,
  },
  tambakSection: {
    marginBottom: 20,
  },
  panenSection: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
  },
  contentContainer: {
    marginVertical: 25,
    marginHorizontal: 20,
  },
});
