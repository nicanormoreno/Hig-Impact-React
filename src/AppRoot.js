import React from 'react';
import { View, } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Drawer } from 'react-native-drawer';
import Router from './Router';
import VTSideBar from './components/VTSideBar';

class AppRoot extends React.PureComponent {
//   componentDidMount() {
  //     DataMem.modalRef = this.refs.modal;
  //     DataMem.appLoader = this.refs.loader;
  //     DataMem.drawerRef = this.drawer._root;
  //     DataMem.baseModalRef = this.refs.baseModal;
  //     DataMem.managementRef = this.refs.managementModal;
  //   }

  render() {
    return (
      <View style={{ flex: 1 }}>
          {/* <Drawer
          ref={ref => {
            this.drawer = ref;
          }}
          content={<VTSideBar />}
          onClose={() => DataMem.closeDrawer()}>
          <Router />
        </Drawer> */}
        <Router />
      </View>
    );
  }
}
// function mapStateToProps({ appReducer }) {
//   return {};
// }
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {
//     },
//     dispatch
//   );
// }
// export default connect(mapStateToProps, mapDispatchToProps)(AppRoot);
module.exports = AppRoot;
