import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, RadioButton, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { createHarvest } from "../store/actions/actionPond";

export default function AddHarvestScreen({ navigation }) {
  const { pond } = useSelector((state) => state.ponds);
  const dispatch = useDispatch();
  const [inputAddHarvest, setInputAddHarvest] = useState({
    capital: "",
    earning: "",
    quality: "",
    description: "",
  });

  const changeInput = (key, value) => {
    let newInput = {
      ...inputAddHarvest,
    };
    newInput[key] = value;
    setInputAddHarvest(newInput);
  };

  const submitHarvest = () => {
    dispatch(createHarvest(inputAddHarvest, pond._id))
      .then(() => navigation.goBack())
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        label="Modal Awal"
        value={inputAddHarvest.capital}
        mode="outlined"
        onChangeText={(value) => changeInput("capital", value)}
        style={{ marginBottom: 10 }}
      />

      <TextInput
        label="Hasil Pendapatan"
        value={inputAddHarvest.earning}
        mode="outlined"
        onChangeText={(value) => changeInput("earning", value)}
        style={{ marginBottom: 10 }}
      />

      <TextInput
        label="Kualitas Panen"
        value={inputAddHarvest.quality}
        mode="outlined"
        onChangeText={(value) => changeInput("quality", value)}
        style={{ marginBottom: 10 }}
      />

      <TextInput
        label="Deskripsi"
        value={inputAddHarvest.description}
        mode="outlined"
        onChangeText={(value) => changeInput("description", value)}
        style={{ marginBottom: 10 }}
      />

      <Button
        mode="contained"
        uppercase={true}
        onPress={() => submitHarvest()}
        style={styles.button}
      >
        Submit
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
  },
  button: {
    borderRadius: 5,
    fontWeight: "bold",
    marginBottom: 15,
  },
});
