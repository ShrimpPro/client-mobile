import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import { fetchPondDetail, fetchPonds } from "../store/actions/actionPond";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

export default function SelectPond() {
  const [selectedValue, setSelectedValue] = useState("");
  const { ponds, pond } = useSelector((state) => state.ponds);
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedValue(pond?._id);
  }, []);

  const changePond = (id) => {
    dispatch(fetchPondDetail(id))
      .then((pond) => {
        setSelectedValue(pond._id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View>
      <Text>Switch Pond:</Text>
      <View style={styles.selectOption}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(value, index) => changePond(value)}
        >
          {ponds?.map((pond, index) => {
            return (
              <Picker.Item
                key={pond._id}
                label={`${index + 1}`}
                value={pond._id}
              />
            );
          })}
        </Picker>
      </View>
    </View>
  );
  {
    /* <ScrollView horizontal={true}>
        {ponds.map((ponds, index) => {
          return (
            <Button
              mode="contained"
              onPress={(value, index) => {
                changePond(value);
              }}
            >
              {index + 1}
            </Button>
          );
        })}
      </ScrollView>
    </View> */
  }
}

const styles = StyleSheet.create({
  selectOption: {
    width: 200,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
