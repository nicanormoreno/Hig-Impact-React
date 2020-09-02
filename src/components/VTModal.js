import React, {Component} from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Icon} from 'native-base';
import {Field, reduxForm} from 'redux-form';
import NewInput from '../components/NewInput'
import {required} from '../common/Validations'
import L from '../common/Layout'

class VTModal extends Component{
  constructor(props){
      super(props);
      this.submitForm = this.submitForm.bind(this);
  }

  close(){
    this.props.callback();
  }

  submitForm(value){
    const {password} = value;
    this.props.callback(password);
  }
    
  render(){
    let {handleSubmit} = this.props;
    const {isOpen} = this.props
    return(
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
      >
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={{color:'#ffffff', marginBottom:L.h(2)}}>Password Request</Text>
            <TouchableOpacity onPress={() => this.close()}>
              <Icon name= "close" style={{color:'#ffffff'}}/>
            </TouchableOpacity>
            </View>
              <View style={{paddingHorizontal:10, marginTop:L.h(7), alignItems:'center'}}>
                <Text>Your password is requested for this action</Text>
                  <Field
                    style={styles.field}
                    autoCapitalize="none"
                    name="password"
                    type="text"
                    secureTextEntry
                    component={NewInput}
                    validate={[required]}
                  />
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit(this.submitForm)}
                  >
                    <Text style={styles.ingreso}>AUTHENTICATE</Text>
                  </TouchableOpacity>
              </View>        
            </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
    modal:{
        backgroundColor:'#ffffff',
        alignSelf:'center',
        marginTop:'35%',
        width:'75%',
        height:L.h(195),
    },
    header:{
        flexDirection:'row',
        backgroundColor:'#C13112',
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'flex-end' 
    },
    button:{
        marginTop:L.h(10),
        width:L.h(100),
        height:L.h(35),
        backgroundColor:'#61B8DE',
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
      },
      ingreso: {
        fontSize: L.h(12),
        fontWeight: '600',
        fontStyle: 'normal',
        letterSpacing: 0.05,
        color: '#EEEEEE',
        textAlign: 'center',
      },
      field:{
          height:L.h(20),
          width:'75%',
          height:L.h(40),
          marginTop:L.h(20)
      }
})

export default reduxForm({
    form:'modal',
    destroyOnUnmount: true,
})(connect(null,null)(VTModal));