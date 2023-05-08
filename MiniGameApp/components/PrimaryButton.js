import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton(props) {
    
  let pressHandler = () => {
    console.log("Pressed!");
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable onPress={pressHandler} style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] :styles.buttonInnerContainer}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    backgroundColor: "#72063c",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    elevation: 2,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
