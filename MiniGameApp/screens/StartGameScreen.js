import React from "react";
import { TextInput, Button, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.numberContainer}>
        <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
        />
      </View>

      <View style={styles.button}>
        <PrimaryButton>Reset</PrimaryButton>
      </View>
      <View style={styles.button}>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    padding: 16,
    backgroundColor: "#4e0329",
    marginHorizontal: 24,
    borderRadius: 8,
    // elevation is for android , 4 shadow properties are for iOS
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.4,
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'center',
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: 'center',
    alignSelf: "center",
  },

  numberContainer:{
    width: "100%",
  },

  button:{
   width: '50%',
  },
});
