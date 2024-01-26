/**
 * Task Assignment React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InitialNavigation from './src/navigation';
import { configAxiosStructure } from './src/provider/api-config';
import { Provider } from 'react-redux';
import store from './src/redux';

function App(): React.JSX.Element {

  useEffect(() => {
    configAxiosStructure()
  }, [])

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar
          backgroundColor={'white'}
          barStyle={'dark-content'}
        />
        <SafeAreaView edges={['right', 'bottom', 'left']} />
        <View style={{ flex: 1 }}>
          <InitialNavigation />
        </View>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
