import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { useDispatch } from "react-redux";
import { createInvoice } from "../store/actions/actionUser";
import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

export default function CategoryScreen() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { colors } = useTheme();

  const basicHandler = () => {
    setLoading(true);
    dispatch(createInvoice("BASIC"))
      .then((order) => {
        setLoading(false);
        navigation.navigate("Payment", { order })
      })
      .catch((err) => console.log(err));
  };

  const premiumHandler = () => {
    setLoading(true);
    dispatch(createInvoice("PREMIUM"))
      .then((order) => {
        setLoading(false);
        navigation.navigate("Payment", { order })
      })
      .catch((err) => console.log(err));
  };
  return (
    <View style={styles.container}>
      {
        loading ? <LoadingSpinner /> : <>
          <Text style={styles.title}>Select Category</Text>
          <View style={styles.category}>
            <Text
              style={[styles.text, { color: colors.primary }]}
              onPress={() => basicHandler()}
            >
              Basic
            </Text>
            <Text
              style={[styles.text, { color: colors.primary }]}
              onPress={() => premiumHandler()}
            >
              Premium
            </Text>
          </View>
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 50,
    left: 50,
    top: 50,
    bottom: 50,
  },
  category: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontFamily: "Poppins-Bold",
    marginHorizontal: 10,
    fontSize: 16,
  },
});
