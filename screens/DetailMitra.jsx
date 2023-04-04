import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from "react-native";
import { Card } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "../store/actions/actionUser";
import { useRoute } from "@react-navigation/native";
import LoadingSpinner from "../components/LoadingSpinner";
import { capitalizeFirstLetter, pondCategory } from "../helpers";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function DetailMitra() {
  const [img, setImg] = useState(0);
  const { user, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { id } = useRoute().params;

  useEffect(() => {
    dispatch(fetchUserDetail(id)).catch((err) => console.log(err));
  }, []);

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
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 20 }}>
              <ScrollView
                onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
              >
                {user?.images?.map((e, index) => (
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
              {user?.images?.map((e, index) => (
                <Text
                  key={e}
                  style={img == index ? styles.dotActive : styles.dot}
                >
                  ●
                </Text>
              ))}
            </View>
            <View style={styles.contentContainer}>
              <Card>
                <Card.Content>
                  <View style={styles.dataContainer}>
                    <Text style={styles.title}>Nama:</Text>
                    <Text style={styles.content}>{user?.name}</Text>
                  </View>
                  <View style={styles.dataContainer}>
                    <MaterialCommunityIcons
                      name="phone"
                      size={24}
                      color="black"
                      style={{ marginBottom: 5 }}
                    />
                    <Text style={styles.content}>{user?.phoneNumber}</Text>
                  </View>
                  <View style={styles.dataContainer}>
                    <MaterialIcons
                      name="location-pin"
                      size={24}
                      color="black"
                      style={{ marginBottom: 5 }}
                    />
                    <Text style={styles.content}>{user?.address}</Text>
                  </View>
                  <View style={styles.dataContainer}>
                    <Text style={styles.title}>Jenis Tambak:</Text>
                    <Text style={styles.content}>
                      {user?.ponds ? pondCategory(user?.ponds) : ""}
                    </Text>
                  </View>
                  <View style={styles.dataContainer}>
                    <Text style={styles.title}>Membership:</Text>
                    <Text style={styles.content}>
                      {user?.membership
                        ? capitalizeFirstLetter(user?.membership)
                        : ""}
                    </Text>
                  </View>
                </Card.Content>
              </Card>
            </View>
          </SafeAreaView>
        </>
      )}
    </>
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
    marginBottom: 20,
  },
  wrapdot: {
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
  dataContainer: {
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
