import React, { Component, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, AsyncStorage, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-check-box'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import HtmlToPdf from 'react-native-html-to-pdf'
import * as Animatable from 'react-native-animatable';
import {Icon} from 'native-base';
import {actionGetAtms, actionAtmDetail, actionSearchAtms} from '../actions/AtmsActions'
import {actionLoading} from '../actions/AppActions'
import _ from 'lodash'
import { Actions } from 'react-native-router-flux';
import { BackHandler } from 'react-native';
import L from '../common/Layout'
import PdfModal from '../components/PdfModal'
import NewInput from '../components/NewInput';

const IMG_LOGO = require('../common/assets/aTm.jpg');

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      searchByCity:true,
      postalcode_2000_3000:false,
      showModal: false,
    }
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.submitForm = this.submitForm.bind(this)
  }
  componentDidMount(){
    // AsyncStorage.getItem('session_token').then(token =>{
    //   this.props.actionGetAtms(token);
    // })
    
    if(this.props.session_token){
        this.props.actionGetAtms(this.props.session_token);
    }
    else{
      this.props.actionLoading(true);
      setTimeout(()=>{
        Actions.login()
      }, 3000)
    }
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    BackHandler.exitApp()
    return true;
  }

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  atmDetailCallback(){
      Actions.atm();
  }

  // createPDF(){
  //   let atms = []
  //   this.props.atms_list.forEach(atm=>{
  //     const {postalcode} = atm.address;
  //     if(parseInt(postalcode) >= 2000 && parseInt(postalcode <= 3000) ){
  //         atms.push({
  //           city: atm.adress.city,
  //           adress: `${atm.adress.street} ${atm.adress.housenumber}`,
  //           postalcode: atm.address.postalcode
  //         })
  //       }
  //     })
  //   let html = <html>
  //     {atms.map(atm=>{
  //       return <div>
  //         <div>
  //           <a>City: </a>
  //           <a>{atm.city}</a>
  //         </div>
  //         <div>
  //           <a>Address: </a>
  //           <a>{atm.adress}</a>
  //         </div>
  //         <div>
  //           <a>Postal code: </a>
  //           <a>{atm.postalcode}</a>
  //         </div>
  //       </div>
  //     })}
  //   </html>
  //   let options={
  //     html,
  //     fileName: 'ATMs',
  //     directory: 'Documents'
  //   }
  //   HtmlToPdf.convert(options).then(response=>{
  //   })
  // }

  submitForm(value){
    const {search} = value
    const {session_token} = this.props
    let filter = this.state.searchByCity ? 'city' : 'street'  
    this.props.actionSearchAtms(search, filter, session_token);
  }


  atmSearch(){
    const { handleSubmit } = this.props;
    return (
      <View style={{
        flexDirection:'row', 
        height:L.h(70), 
        width:'90%',
        alignSelf:'center', 
        alignItems:'center',
        justifyContent:'flex-end',
        marginTop:L.h(50), 
        backgroundColor:'#C13112',
        borderRadius:L.h(12)
      }} >
        <View style={{width:'100%'}}>
          <View style={{flexDirection:'row'}}>
            <View style = {{width:'85%'}}>
                <Field
                  style={{ height:L.h(30) }}
                  name="search"
                  type="text"
                  placeholder="Search"
                  autoCapitalize="none"
                  component={NewInput}
                  onSubmitEditing={handleSubmit(this.submitForm)}
                />
            </View>
            <TouchableOpacity onPress={handleSubmit(this.submitForm)}>
              <Icon name='search' style={{color:'#eeeeee'}}/>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row', width:L.h(270), marginLeft:L.h(20)}}>
            <Text>City:</Text>
            <CheckBox
              style={{flex:1}}
              onClick={()=> this.setState({searchByCity:true})}
              isChecked={this.state.searchByCity}
            />
            <Text>Street:</Text>
            <CheckBox
              style={{flex: 1}}
              onClick={()=> this.setState({searchByCity:false})}
              isChecked={!this.state.searchByCity}
            />
            <Text>Postal code filter:</Text>
            <CheckBox
              style={{flex: 1}}
              onClick={()=> this.filterByPostalCode(!this.state.postalcode_2000_3000)}
              isChecked={this.state.postalcode_2000_3000}
            />
          </View>
        </View>
      </View>
    )
  }

  filterByPostalCode(state){
    this.setState({postalcode_2000_3000: state});
  }

  atmCard(atm){
    const {city, street, housenumber} = atm.address;
    return(
      <TouchableOpacity onPress = {() => this.props.actionAtmDetail(
        {
        index:atm.index,
        city:atm.address.city,
        street:atm.address.street,
        housenumber:atm.address.housenumber,
        lat:atm.address.geoLocation.lat,
        lng:atm.address.geoLocation.lng
        },
         this.atmDetailCallback) }
      >
        <Animatable.View style={styles.card}>
          <Animatable.Image 
            ref="imgLogo"
            source={IMG_LOGO}
            resizeMode="contain"
            delay={1000}
            duration={1500}
            style = {styles.catd_picture}
          />
          <View style={{height:L.h(50), marginLeft:L.h(20), justifyContent:'space-evenly', alignItems:'flex-start'}}>
            <Text style={styles.card_text}>{city}</Text>
            <Text style={styles.card_sub_text}>{street} {housenumber}</Text>
          </View>
        </Animatable.View>
      </TouchableOpacity>
    ) 
  }

  renderAtmCard(atm){
    const{postalcode} = atm.address 
    const {postalcode_2000_3000} = this.state;
    if(postalcode_2000_3000){
      if(parseInt(postalcode) >= 2000 || parseInt(postalcode <= 3000) ){
        return  this.atmCard(atm);
      }
    }else{
      return this.atmCard(atm);
    }
  }

  render() {
    const {atms_list} = this.props
    return (
      <View style={{flex: 1, 
        justifyContent:'center',
        backgroundColor:'#cccccc'}}>
        {this.atmSearch()}
        <PdfModal 
          isOpen={this.state.showModal}
          pdf= {null}
        />
        <TouchableOpacity onPress= {()=>this.createPDF()}>
          <Text style={{alignSelf:'center', marginTop:L.h(10), color:'#777777'}}>
            {this.state.postalcode_2000_3000?'Atms whit postal code between 2000 and 3000':null}
          </Text>
        </TouchableOpacity>
        <ScrollView style={{width:"100%", marginTop:L.h(25)}} overflow="hidden">
        {
          !_.isEmpty(atms_list)
            ?<FlatList
              containerContentStyle={styles.container}
              data={atms_list}
              renderItem={({ item }) => (
                this.renderAtmCard(item)
              )}
              keyExtractor={item => item.alpha2code}
              // Performance settings
              removeClippedSubviews={true} // Unmount components when outside of window 
              initialNumToRender={2} // Reduce initial render amount
              maxToRenderPerBatch={1} // Reduce number in each render batch
              updateCellsBatchingPeriod={100} // Increase time between renders
              windowSize={7} // Reduce the window size
            />
            :null
        }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: '80%',
    height: L.hProm(80.7),
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
    alignItems:'center',
    paddingLeft: L.w(24),
    elevation: 3,
    marginBottom:L.h(20),
    flexDirection:'row',
  },
  card_text:{
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0.05,
    color: '#666666',
    textAlign: 'center',
  },
  card_sub_text:{
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0.05,
    color: '#888888',
    textAlign: 'center',
  },
  card_content:{
    justifyContent:'center',
  },
  catd_picture:{
    width:L.h(50),
    height:L.h(50)
  },
  scroll:{
    flex: 1,
    backgroundColor:'red',
    marginTop:100,
    width:L.h(300)
  },
  container:{
    flex: 1, 
    justifyContent:'center',
    backgroundColor:'#555555'
  }
})

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
      actionGetAtms,
      actionAtmDetail,
      actionSearchAtms,
      actionLoading
		},
		dispatch
	);
}

const mapStateToProps = (state) =>{
  const {atms_list, atm_selected} = state.atmsReducer;
  const { session_token} = state.appReducer;
  return {
    atms_list,
    atm_selected,
    session_token
  }
}

export default reduxForm({
  form:'search'
})(connect(mapStateToProps, mapDispatchToProps)(Home));
