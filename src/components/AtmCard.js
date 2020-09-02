import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import L from '../common/Layout'

export class AtmCard extends Component {
    render(){
        return(
            <View style={style.card}>
                <Text>HOLA</Text>
            </View> 
        )
    }
}

const style = StyleSheet.create({
    card: {
        flex: 1,
        width: L.h(80),
        height: L.h(45),
    }

})