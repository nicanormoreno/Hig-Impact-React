import React, { Component } from 'react';
import {
  View, Text, ScrollView, ImageBackground, StyleSheet, AsyncStorage, TouchableOpacity
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { Field, reduxForm } from 'redux-form';
import NewInput from '../components/NewInput';
import { required } from '../common/Validations';
import L from '../common/Layout';
import {actionLogin} from '../actions'
import { Actions } from 'react-native-router-flux';


const IMG_LOGO = require('../common/assets/aTm.jpg');
const BACKGROUD = require('../common/assets/backgroud.jpg');

const slideInUp = {
  from: {
    translateY: L.hProm(290),
  },
  to: {
    translateY: 0,
  },
};

class Login extends Component {
  constructor(props){
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.loginCallback = this.loginCallback.bind(this);
  }
  submitForm(value) {
    console.log('yes')
    this.props.actionLogin(value.username, value.password, this.loginCallback);
  }

  loginCallback(token){
    console.log('callback');
    AsyncStorage.setItem('session_token', token)
    .then( () => {
      Actions.home();
    })
    
  }

  renderSplash() {
    const { animation } = this.props;
    return (
      <Animatable.Image
        ref="imgLogo"
        source={IMG_LOGO}
        resizeMode="contain"
        delay={animation ? 1000 : 0}
        animation={slideInUp}
        duration={1500}
        style={styles.aTm}
      />
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <ImageBackground source={BACKGROUD} style={{ flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="always" overflow="hidden">
          <View style={{ marginTop: L.h(100), height: null }}>
            {this.renderSplash()}
          </View>
          <Animatable.View animation="fadeIn" duration={1000}>
            <View style={{ marginTop: L.h(120) }}>
              <Field
                style={{ marginBottom: L.h(27), height:L.h(68) }}
                placeholder="Username"
                autoCapitalize="none"
                name="username"
                type="text"
                trim
                component={NewInput}
                validate={[required]}
              />
              <Field
                style={{ marginBottom: L.h(27), height:L.h(68) }}
                name="password"
                type="text"
                placeholder="Contraseña"
                autoCapitalize="none"
                secureTextEntry
                component={NewInput}
                validate={required}
                onSubmitEditing={handleSubmit(this.submitForm)}
              />
            </View>
            <TouchableOpacity
             style={styles.button}
             onPress={handleSubmit(this.submitForm)}>
              <Text style={styles.ingreso}>LOGIN</Text>
            </TouchableOpacity>
          </Animatable.View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  aTm: {
    width: L.wProm(200),
    height: L.hProm(147),
    alignSelf: 'center',
  },
  button:{
    marginTop:L.h(20),
    width:L.h(110),
    height:L.h(42),
    backgroundColor:'#661111',
    borderRadius: 5,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  ingreso: {
    fontSize: L.h(20),
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0.05,
    color: '#cccccc',
    textAlign: 'center',
  },
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
      actionLogin,
		},
		dispatch
	);
}

const mapStateToProps = (state) => ({});

export default reduxForm({
  form: 'login',
  destroyOnUnmount: true,
})(connect(mapStateToProps, mapDispatchToProps)(Login));

