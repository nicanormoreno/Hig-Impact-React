import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Alert, Modal, AsyncStorage} from 'react-native'
import {Icon} from 'native-base'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {Field, reduxForm, formValueSelector, getFormValues} from 'redux-form'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { BackHandler } from 'react-native';
import Map from '../components/Map'
import {required, typeInteger, typeIntegerOrDecimal} from '../common/Validations'
import VTModal from '../components/VTModal'
import NewInput from '../components/NewInput'
import L from '../common/Layout'
import {actionLogin, actionEditAtm} from '../actions'

class Atm extends Component {
    constructor(props){
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state={
            can_edit:false,
            showModal:false
        }
        this.authCallback = this.authCallback.bind(this);
        this.submitCallback = this.submitCallback(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }

    _handleMapRegionChange = mapRegion => {
        this.setState({ mapRegion });
    };

    submitForm(values){
        const {atms_list} =this.props;
        this.props.actionEditAtm(values, this.props.atms_list, this.submitCallback)
        Alert.alert(
          'ATM Edited',
          'The ATM was Edited successfully',
          [
            {
              text:'ok',
              onPress: ()=>Actions.pop()
            }
          ]
          )
    }

    submitCallback(){
    }

    closeModal(password){
        if(password){
            this.props.actionLogin('admin', password, this.authCallback)
            // this.props.actionLogin(this.props.username, password, this.authCallback)
        }
        this.setState({showModal:false});
    }

    authCallback(token){
        if(token){
            this.setState({can_edit: true})
        }else{
            Alert.alert(
                'Error',
                'Authorization failed',
            )
        }
    }

    editAtmCallback(){
        
    }

    render(){
        let { handleSubmit } = this.props;
        const {initialValues} = this.props
        const {can_edit} = this.state;
        let lat = initialValues ? parseInt(initialValues.lat, 10) : 37.887;
        let lng = initialValues ? parseInt(initialValues.lat, 10) : -122.12;
        return(
          <View style={styles.container}>
              <VTModal 
                isOpen={this.state.showModal}
                callback={this.closeModal.bind(this)}
              />
            <View style={styles.header}>
              <TouchableOpacity onPress={()=>Actions.home()}>
                <Icon name= "arrow-back" style={styles.app_color}/>
              </TouchableOpacity>
              <TouchableOpacity 
                  style={[styles.button,{backgroundColor: can_edit ? '67C112': '#C13112' }]}
                  onPress = { can_edit ? handleSubmit(this.submitForm) : () => this.setState({showModal: true})}
                >
                <Icon name={can_edit ? "save" : "brush"} style={{color:'#ffffff'}}/>
              </TouchableOpacity>   
            </View> 
              <ScrollView keyboardShouldPersistTaps="always" overflow="hidden">
                <View style={{width:'90%', alignSelf:'center', marginLeft:L.h(10)}}>
                  <Text style={styles.app_color}>City</Text>
                </View>  
                <Field
                  style={styles.field}
                  autoCapitalize="none"
                  name="city"
                  type="text"
                  component={NewInput}
                  validate={[required]}
                  editable={can_edit}
                />
                <View style={{width:'90%', alignSelf:'center', marginLeft:L.h(10)}}>
                  <Text style={styles.app_color}>Street</Text>
                </View>
                <Field
                  style={styles.field}
                  autoCapitalize="none"
                  name="street"
                  type="text"
                  component={NewInput}
                  validate={[required]}
                  editable={can_edit}
                />
                <View style={{width:'90%', alignSelf:'center', marginLeft:L.h(10)}}>
                  <Text style={styles.app_color}>House number</Text>
                </View>
                <Field
                  style={styles.field}
                  autoCapitalize="none"
                  name="housenumber"
                  type="text"
                  component={NewInput}
                  validate={[required]}
                  editable={can_edit}
                />
                <View style={{flexDirection:"row", flex:1, width:'95%', alignSelf:'center' }}>
                  <View style={{flex:1}}>
                    <View style={{width:'80%', alignSelf:'center'}}>
                      <Text style={styles.app_color}>Latitude</Text>
                    </View>
                    <Field
                      style={{ marginBottom: L.h(25), height:L.h(68)}}
                      autoCapitalize="none"
                      name="lng"
                      type="text"
                      component={NewInput}
                      validate={[required, typeIntegerOrDecimal]}
                      editable={can_edit}
                    />
                  </View>
                  <View style={{flex:1}}>
                    <View style={{width:'80%', alignSelf:'center'}}>
                      <Text style={styles.app_color}>Longitude</Text>
                    </View>
                    <Field
                      style={{ marginBottom: L.h(25), height:L.h(68)}}
                      autoCapitalize="none"
                      name="lat"
                      type="text"
                      component={NewInput}
                      validate={[required, typeIntegerOrDecimal]}
                      editable={can_edit}
                    />
                  </View>
                </View>
                <Map geolocation={{lat,lng,dLat:0.1,dLng:0.1}} />     
              </ScrollView>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    field:{ 
        marginBottom: L.h(20),
        height:L.h(68) 
    },
    container:{
        flex: 1, 
        backgroundColor:'#cccccc'
    },
    button:{
        width:L.h(36),
        height:L.h(36),
        borderRadius:L.h(18),
        justifyContent:'center',
        alignItems:'center',
    },
    button_text: {
        fontSize: L.h(20),
        fontWeight: '600',
        fontStyle: 'normal',
        letterSpacing: 0.05,
        color: '#eeeeee',
        textAlign: 'center',
    },
    header:{
        flexDirection:'row',
        marginTop:L.h(36),
        paddingHorizontal:L.h(15), 
        alignItems:'center', 
        justifyContent:'space-between'
    },
    app_color:{
        color:'#C13112'
    }
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            actionLogin,
            actionEditAtm
        },dispatch
    )
}

const mapStateToProps = (store) =>{
    const {atm_selected, atms_list} = store.atmsReducer;
    const {username} = store.appReducer;
    return {
        initialValues:atm_selected,
        atms_list,
        username
    }
}
// export default reduxForm({
//     form:'atm',
//     destroyOnUnmount: false
// })(connect(mapStateToProps, mapDispatchToProps)(Atm));

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form:'atm',
    initialValues: mapStateToProps.initialValues
})(Atm))