import React, {Component} from 'react';
import {StyleSheet} from 'react-native'
import MapView, {Marker} from 'react-native-maps' 
import L from '../common/Layout'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native-animatable';

export default class Map extends Component{
    constructor(props){
        super(props)
        this.state={
            lat:0,
            lng:0,
            dLat:0.1,
            dLng:0.1
        }
    }

    componentDidMount(){
        const {geolocation} = this.props
        geolocation
        ?this.setState({
            lat: parseInt(geolocation.lat, 10),
            lng: parseInt(geolocation.lng, 10),
            dLat: geolocation.dLat,
            dLng: geolocation.dLng
        })
        :null
    }

    render(){
        const {lat, lng, dLat, dLng} = this.state;
        return(
             <View style={styles.map}>
                <MapView 
                  style={styles.map}
                  loadingEnabled={true}
                  region={{
                      latitude: lat,
                      longitude: lng,
                      latitudeDelta: dLat,
                      longitudeDelta: dLng
                  }}
                >
                    <Marker
                        coordinate={{latitude:lat, longitude:lng}}
                    />
                </MapView>  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignSelf:'center',
    },
    map:{
        height: L.h(170),
        borderRadius:5,
        width:'95%',
        alignSelf:'center'
    }
});