/**
 * Task Assignment React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InitialNavigation from './src/navigation';

function App(): React.JSX.Element {

  return (
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
  );
}

export default App;
