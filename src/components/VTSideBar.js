import React, { Component } from "react";
import {
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Container
} from "native-base";
import {
  View,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground
} from "react-native";
import DataMem from "../common/DataMem";
import L from "../common/Layout";
import { connect } from "react-redux";
import DrawerButton from "./DrawerButton";

const screen = Dimensions.get("window");

class VTSideBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onPressMenuitem = this.onPressMenuitem.bind(this);
  }
  onPressMenuitem(action, index) {
    setTimeout(() => {
      DataMem.closeDrawer();
    }, 200);
  }

  render() {
    const menuOptions = [
      {
        label: "Perfil",
        action: "userProfile",
        icon: require("../common/assets/icon.png")
      },
      {
        label: "Home",
        action: "home",
        icon: require("../common/assets/icon.png")
      },
      {
        label: "Realizar Pedidos",
        action: "gasRecharge",
        icon: require("../common/assets/icon.png")
      },
      {
        label: "Bocas",
        action: "bocas",
        icon: require("../common/assets/icon.png")
      },
      {
        label: "Formas de Pago",
        action: "paymentMethods",
        icon: require("../common/assets/icon.png")
      },
      {
        label: "Mis Gestiones",
        action: "managementMain",
        icon: require("../common/assets/icon.png")
      },
      {
        label: "Contacto",
        action: "contact",
        icon: require("../common/assets/icon.png")
      },
      {
        label: "Cerrar sesión",
        action: "logout",
        icon: require("../common/assets/icon.png")
      }
    ];
    return (
      <ImageBackground
        source={require("../common/assets/icon.png")}
        style={{ flex: 1 }}>
        <ScrollView>
          <Image
            resizeMode="contain"
            style={{
              height: L.hProm(67),
              width: L.wProm(147),
              alignSelf: "center",
              marginTop: L.h(30),
              marginBottom: L.h(30)
            }}
            source={require("../common/assets/icon.png")}
          />
          <List>
            {menuOptions.map((item, index) => {
              return (
                <DrawerButton
                  label={item.label}
                  icon={item.icon}
                  style={{ marginTop: L.h(12) }}
                  onPress={() => this.onPressMenuitem(item, index)}
                />
              );
            })}
          </List>
          <View style={{ height: L.h(20) }}></View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = {
  headerStyle: {
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#002e6d"
  },
  avatarIconStyle: {
    color: "#fff",
    paddingRight: 20,
    fontSize: 50
  },
  messageStyle: {
    alignSelf: "center",
    color: "#fff"
  }
};

const mapStateToProps = ({ usersReducer }) => {
  const { user, loading } = usersReducer;
  return { user, loading };
};

export default connect(mapStateToProps, null)(VTSideBar);
