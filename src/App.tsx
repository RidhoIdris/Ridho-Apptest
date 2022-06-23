import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './screen/RootStackPrams';
import {persistor, store} from './store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import MainScreen from './screen/MainScreen';
import AuthScreen from './screen/AuthScreen';
import ModalContact from './screen/MainScreen/HomeScreen/ModalContact';

const Stack = createStackNavigator<RootStackParamList>();

interface AppPropsInteface {}

const App: React.FunctionComponent<AppPropsInteface> = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Group>
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Main" component={MainScreen} />
          </Stack.Group>
          <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen name="ModalContact" component={ModalContact} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
