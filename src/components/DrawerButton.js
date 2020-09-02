import React from "react";
import L from "../common/Layout";
import Colors from "../common/Colors";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const DrawerButton = ({ children, label, style, icon, onPress, ...rest }) => (
  <TouchableOpacity style={[styles.buttonStyle, style]} onPress={onPress}>
    <View style={styles.row}>
      <View style={styles.right}>
        <Image source={icon} style={[styles.imageStyle]} resizeMode="contain" />
      </View>
      <View style={styles.left}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

DrawerButton.defaultProps = {
  icon: require("../common/assets/profileDrawerIcon.png")
};
const styles = StyleSheet.create({
  label: {
    //fontFamily: "SourceSansPro",
    fontSize: 15,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0.04,
    color: Colors.peacockBlue
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  right: {
    flex: 0.85,
    alignItems: "center",
    justifyContent: "center"
  },
  left: {
    flex: 1.15,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  buttonStyle: {
    width: "90%",
    borderRadius: 12,
    height: L.hProm(46),
    backgroundColor: "#f2f2f2",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    //width: "100%",
    height: L.hProm(27)
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0
  }
});

export default DrawerButton;
