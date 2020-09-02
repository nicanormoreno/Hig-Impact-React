import { Platform, Dimensions } from 'react-native';

const React = require('react');

const screen = Dimensions.get('window');

let _formulaHeight = null;
let _formulaWidth = null;
let _promedio = null;

class L {
  static get formulaHeight() {
    return _formulaHeight;
  }

  static set formulaHeight(value) {
    _formulaHeight = value;
  }

  static get promedio() {
    return _promedio;
  }

  static set promedio(value) {
    _promedio = value;
  }

  static get formulaWidth() {
    return _formulaWidth;
  }

  static set formulaWidth(value) {
    _formulaWidth = value;
  }

  static s() {
    if (_formulaHeight == null) {
      _formulaHeight = screen.height
        / (Platform.OS === 'ios'
          ? screen.height > 667
            ? screen.height
            : 667
          : screen.height > 640
            ? screen.height
            : 640);
      _formulaWidth = screen.width / (Platform.OS === 'ios' ? 375 : 360);
      _promedio = (_formulaHeight + _formulaWidth) / 2;
    }
  }

  static h(numero) {
    return numero * _formulaHeight;
  }

  static hInt(numero) {
    const result = numero * _formulaHeight;
    return parseInt(result);
  }

  static wInt(numero) {
    const result = numero * _formulaWidth;
    return parseInt(result);
  }

  static w(numero) {
    return numero * _formulaWidth;
  }

  static t(numero) {
    return numero * _formulaWidth;
  }
  // TODO SACAR ESTAS NUEVAS FUNCIONES Y CAMBIAR EN LAS FUNCIONES DE ARRIBA EL MULTIPLICADOR POR EL promedio
  // ESTAS FUNCIONES SON DE PRUEBA

  static hProm(numero) {
    return numero * _promedio;
  }

  static wProm(numero) {
    return numero * _promedio;
  }

  static wPorcentaje(numero) {
    return numero * 0.01 * screen.width;
  }

  static hPorcentaje(numero) {
    return numero * 0.01 * screen.height; // Esto solo se utiliza en caso de que el componente no este dentro de un ListView o ScrollView
  }
}

L.s();

module.exports = L;
