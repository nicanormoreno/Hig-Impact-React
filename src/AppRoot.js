import React from 'react';
import { View, Modal, Text, Animated, Easing} from 'react-native';
import {Icon} from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Router from './Router';

class AppRoot extends React.PureComponent {
  constructor(props){
    super(props)
    this.RotateValueHolder = new Animated.Value(0);
  }
//   componentDidMount() {
  //     DataMem.modalRef = this.refs.modal;
  //     DataMem.appLoader = this.refs.loader;
  //     DataMem.drawerRef = this.drawer._root;
  //     DataMem.baseModalRef = this.refs.baseModal;
  //     DataMem.managementRef = this.refs.managementModal;
  //   }

  componentDidMount() {
    this.StartImageRotateFunction();
  }
  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);
    Animated.timing(this.RotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
    }).start(() => this.StartImageRotateFunction());
  }

  render() {
    const RotateData = this.RotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View style={{ flex: 1 }}>
        <Router />
        <Modal
        animationType="non"
        transparent={false}
        visible={this.props.loading}>
          <View style={{flex:1, backgroundColor:'#555555', justifyContent:'center', alignItems:'center'}}>
          <Animated.View
          style={{width: 200,height: 200, justifyContent:'center', alignItems:'center',transform: [{ rotate: RotateData }],}}
          source={{uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'}}
        >
          <Icon name='sync'style={{color:'#C13112', fontSize:100, transform:[{rotate:'20deg'}]}}/>
        </Animated.View>
          </View>
        </Modal>
      </View>
    );
  }
}
function mapStateToProps( store) {
  const {loading} = store.appReducer;
  return {loading};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(AppRoot);
// module.exports = AppRoot;
