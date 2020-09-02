import React from 'react';
import {
  ActionConst,
  Scene,
  Router,
} from 'react-native-router-flux';
// import { actChangeScreen } from "./actions";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './screens/Home';
import Login from './screens/Login';
import  Atm  from './screens/Atm';

class RouterComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onBackAndroid = this.onBackAndroid.bind(this);
  }

  onBackAndroid() {
    console.log(
      ' >>>>>>>>>> Actions.currentScene',
      Actions.currentScene,
      this.props.screen.index,
    );
    //     if (AppMem.baseModalRef.isOpen || AppMem.managementRef.isOpen) {
    //       console.log(" >>>>>>>>>> close modals");
    //       AppMem.closeBaseModal();
    //       AppMem.closeManageModal();
    //       return true;
    //     } else if (AppMem.appLoader.isOpen || AppMem.modalRef.isOpen) {
    //       console.log(" >>>>>>>>>> no close modals");
    //       return true;
    //     } else if (
    //       Actions.currentScene == "mainView" &&
    //       this.props.screen.index !== 1
    //     ) {
    //       console.log(" >>>>>>>>>> diferent at home ");
    //       this.props.actChangeScreen("home", 1);
    //       return true;
    //     } else {
    //       console.log(" >>>>>>>>>> pop");
    //       Actions.pop();
    //       return true;
    //     }
  }

  render() {
    return (
      <Router backAndroidHandler={this.onBackAndroid}>
        <Scene key="root" hideNavBar>
          <Scene key = "home" type={ActionConst.RESET} component = { Home } />
          <Scene key= "login" type={ActionConst.RESET} component={Login} />
          <Scene key= "atm" component = { Atm } />
        </Scene>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { screen } = state.appReducer;
  return { screen };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
    //   actChangeScreen
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RouterComponent);
