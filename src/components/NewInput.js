import React from 'react';
import {
  View, TextInput, StyleSheet, Text,
} from 'react-native';
import L from '../common/Layout';
import Colors from '../common/Colors';

const NewInput = ({
  input,
  label,
  meta: { touched, error },
  style,
  placeholder,
  placeholderTextColor,
  trim,
  inputStyle,
  ...rest
}) => (
  <View style={style}>
    <TextInput
      style={[styles.input, styles.inputStyle, inputStyle]}
      inputStyle={[styles.inputStyle, inputStyle]}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={(text) => input.onChange(trim ? text.trim() : text)}
      {...input}
      {...rest}
    />
    {error && touched ? (
      <View style={styles.error}>
        <Text style={styles.required}>{error}</Text>
      </View>
    ) : null}
  </View>
);

NewInput.defaultProps = {
  placeholder: '',
  placeholderTextColor: Colors.peacockBlue,
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    // height: L.hProm(61.7),
    height: '90%',
    backgroundColor: '#f2f2f2',
    shadowColor: '#0951fe',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    borderRadius: 12,
    alignSelf: 'center',
    paddingLeft: L.w(24),
    elevation: 3,
  },
  inputStyle: {
    // fontFamily: "SourceSansPro",
    fontSize: L.h(14.4),
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0.04,
    color: Colors.brownGrey,
    textAlign: 'left',
  },
  required: {
    // fontFamily: "SourceSansPro",
    fontSize: L.h(14.4),
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0.04,
    textAlign: 'right',
    color: Colors.scarlet,
  },
  error: {
    width: '90%',
    alignItems: 'flex-end',
    marginTop: L.h(2),
    alignSelf: 'center',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  labels: {
    // fontFamily: "SourceSansPro",
    fontSize: L.h(14.4),
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0.04,
    color: Colors.peacockBlue,
  },
});

export default NewInput;
