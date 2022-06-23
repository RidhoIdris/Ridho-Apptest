import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import {MainBottomTabParamList} from './mainBottomTabParams';
import OthersScreen from './OthersScreen';
import {MaterialIcon} from '../../Component';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

function MainScreen() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#666AF6',
        headerShown: false,
        tabBarStyle: {
          paddingTop: 5,
        },
      }}>
      <BottomTab.Screen
        name="Contacts"
        options={{
          title: 'Contacts',
          tabBarLabel: 'Contacts',
          tabBarIcon: ({color}) => (
            <MaterialIcon name="account" color={color} size={'extraLarge'} />
          ),
        }}
        component={HomeScreen}
      />
      <BottomTab.Screen
        name="Settings"
        options={{
          title: 'Settings',
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <MaterialIcon name="cog" color={color} size={'extraLarge'} />
          ),
        }}
        component={OthersScreen}
      />
    </BottomTab.Navigator>
  );
}

export default MainScreen;
