/**
 * Task Assignment React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InitialNavigation from './src/navigation';
import { configAxiosStructure } from './src/provider/api-config';
import { Provider } from 'react-redux';
import store from './src/redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { checkAndTakeNotificationPermission } from './src/utilities';

function App(): React.JSX.Element {

  useEffect(() => {
    configAxiosStructure()
    Platform.OS != 'ios' && checkAndTakeNotificationPermission()
  }, [])

  const queryClient = new QueryClient()

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar
          backgroundColor={'white'}
          barStyle={'dark-content'}
        />
        <SafeAreaView edges={['right', 'bottom', 'left']} />
        <View style={{ flex: 1 }}>
          <QueryClientProvider client={queryClient}>
            <InitialNavigation />
          </QueryClientProvider>
        </View>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
