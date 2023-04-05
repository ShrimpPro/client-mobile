import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, RadioButton, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { createHarvest } from "../store/actions/actionPond";
import { Picker } from "@react-native-picker/picker";
import { failureAlert, successAlert } from "../helpers";

export default function AddHarvestScreen({ navigation }) {
  const { pond } = useSelector((state) => state.ponds);
  const dispatch = useDispatch();
  const [inputAddHarvest, setInputAddHarvest] = useState({
    capital: "",
    earning: "",
    quality: "Baik",
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
    if(!inputAddHarvest.capital) return failureAlert('Modal Awal diperlukan');
    if(!inputAddHarvest.earning) return failureAlert('Hasil Pendapatan diperlukan');
    if(!inputAddHarvest.quality) return failureAlert('Kualitas diperlukan');
    if(!inputAddHarvest.description) return failureAlert('Deskripsi diperlukan');
    dispatch(createHarvest(inputAddHarvest, pond._id))
      .then(() => {
        navigation.goBack();
        successAlert('Catatan panen berhasil ditambahkan');
      })
      .catch((err) => failureAlert(err.response.data.message));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center', marginBottom: 30 }}>
        <Text variant="headlineMedium" style={styles.headers}>
          Tambah Panen
        </Text>
      </View>
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

      <View style={{ borderColor: '#888', borderWidth: 1, borderRadius: 5, marginBottom: 3 }}>
        <Picker
          selectedValue={inputAddHarvest.quality}
          onValueChange={(value) => changeInput("quality", value)}
        >
          <Picker.Item label="Baik" value="Baik" />
          <Picker.Item label="Cukup" value="Cukup" />
          <Picker.Item label="Kurang" value="Kurang" />
        </Picker>
      </View>

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
    paddingHorizontal: 25,
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    borderRadius: 5,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 20
  },
  headers: {
    fontWeight: "700"
  }
});
