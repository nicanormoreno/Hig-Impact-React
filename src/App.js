
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Root } from 'native-base';


import reducers from './reducers';
import AppRoot from './AppRoot';

class App extends React.PureComponent {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Root>
        <Provider store={store}>
          <View style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <AppRoot />
          </View>
        </Provider>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = App;
