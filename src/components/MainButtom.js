import React from "react";
import L from "../common/Layout";
import { Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const MainButton = ({ label, style, noBackground, onPress }) => (
  <TouchableOpacity
    style={[
      styles.buttonStyle,
      {
        backgroundColor: noBackground ? "transparent" : "rgba(0, 0, 0, 0.11)",
        shadowOpacity: noBackground ? 0 : 1,
        elevation: noBackground ? 0 : 3
      },
      style
    ]}
    onPress={onPress}>
    {noBackground ? null : (
      <Image
        source={require("../common/assets/waveMainButton.png")}
        style={[styles.imageStyle, styles.absolute]}
      />
    )}
    <Text style={[styles.label]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  label: {
    //fontFamily: "SourceSansPro",
    fontSize: L.h(17),
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0.85,
    textAlign: "center",
    color: "white"
  },
  buttonStyle: {
    width: "90%",
    height: L.hProm(50),
    borderRadius: 12,
    backgroundColor: "rgba(0, 0, 0, 0.11)",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 2,
    marginBottom: L.h(4)
  },
  imageStyle: {
    width: "100%",
    height: "100%"
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0
  }
});

export default MainButton;
