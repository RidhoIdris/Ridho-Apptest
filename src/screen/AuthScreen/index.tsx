import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackPrams';

type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

function AuthScreen() {
  const navigation = useNavigation<authScreenProp>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Auth Screen</Text>
      <Button title="Enter" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}

export default AuthScreen;
