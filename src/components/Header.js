import React from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image
} from "react-native";
import { Icon } from "native-base";
import L from "../common/Layout";
// import StatusBarView from "./StatusBarView";
// import LinearGradient from "react-native-linear-gradient";

const Header = ({ onPressLeft, onPressRight, style }) => (
  <View style={style}>
    {/* <StatusBarView style={{ backgroundColor: "white" }} /> */}
    <View style={styles.backWhite}>
      {/* <LinearGradient
        colors={[
          "rgb(115, 115, 115)",
          "rgb(171, 171, 171)",
          "rgb(115, 115, 115)"
        ]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={[styles.linearGradient, styles.absolute]}
      /> */}
      <ImageBackground
        style={styles.imageBackground}
        source={require("../common/assets/headerGlass.png")}>
        <TouchableOpacity
          onPress={onPressLeft}
          style={{ paddingHorizontal: L.w(16) }}>
          <Image
            source={require("../common/assets/menuIcon.png")}
            style={{ height: L.hProm(20) }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressRight}
          style={{ paddingHorizontal: L.w(16) }}>
          <Image
            source={require("../common/assets/phoneIcon.png")}
            style={{ height: L.hProm(22) }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  </View>
);

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    top: 0,
    left: 0
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    height: L.hProm(41),
    marginTop: L.h(11),
    marginHorizontal: L.w(11)
  },
  imageBackground: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.11)",
    height: L.hProm(41)
  },
  backWhite: {
    backgroundColor: "white",
    height: L.hProm(67),
    paddingTop: L.h(11),
    paddingHorizontal: L.h(12),
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  }
});

export default Header;
