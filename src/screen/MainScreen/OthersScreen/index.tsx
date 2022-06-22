import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackParamList} from '../../RootStackPrams';
import {MainBottomTabParamList} from '../mainBottomTabParams';

type RouteScreenProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList>,
  BottomTabNavigationProp<MainBottomTabParamList>
>;
function OthersScreen() {
  const navigation = useNavigation<RouteScreenProp>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Auth')} />
    </View>
  );
}
export default OthersScreen;
