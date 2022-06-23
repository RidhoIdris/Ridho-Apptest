import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {RouteScreenProp} from '../../../type';

function OthersScreen() {
  const navigation = useNavigation<RouteScreenProp>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Auth')} />
    </View>
  );
}
export default OthersScreen;
