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
import { Card, Chip, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "../store/actions/actionUser";
import { useRoute } from "@react-navigation/native";
import LoadingSpinner from "../components/LoadingSpinner";
import { capitalizeFirstLetterAndLowerTheRest, pondCategory } from "../helpers";
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
            <View style={{ marginTop: 35 }}>
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
              <Card style={{ backgroundColor: "white", fontWeight: "bold" }}>
                <Card.Content>
                  <View style={styles.dataContainerRow}>
                    <Chip mode="outlined">{user?.name}</Chip>
                    <Chip>{user?.ponds ? pondCategory(user?.ponds) : ""}</Chip>
                  </View>
                  <View style={styles.dataContainer}>
                    <View style={{ flexDirection: "row" }}>
                      <MaterialCommunityIcons
                        name="phone"
                        size={24}
                        color="black"
                        style={{ marginBottom: 5, marginRight: 10 }}
                      />
                      <Text style={styles.content}>{user?.phoneNumber}</Text>
                    </View>
                  </View>
                  <View style={styles.dataContainer}>
                    <View style={{ flexDirection: "row" }}>
                      <MaterialIcons
                        name="location-pin"
                        size={24}
                        color="black"
                        style={{ marginBottom: 5, marginRight: 10 }}
                      />
                      <Text style={styles.content}>{user?.address}</Text>
                    </View>
                  </View>
                  <View style={styles.dataContainer}>
                    <Text style={styles.title}>Membership:</Text>
                    <Text style={styles.content}>
                      {user?.membership
                        ? capitalizeFirstLetterAndLowerTheRest(user?.membership)
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
    paddingTop: 30,
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
  dataContainerRow: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
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
