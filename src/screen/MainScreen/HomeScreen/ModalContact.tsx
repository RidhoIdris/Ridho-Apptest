import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RouteScreenProp} from '../../../type';
import {Fonts} from '../../../constant';
import {Text, TextInput} from '../../../Component';

const ModalContact = () => {
  const navigation = useNavigation<RouteScreenProp>();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          backgroundColor: '#EDEFF3',
          height: 220,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            backgroundColor: '#666AF6',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: Fonts.mrBold,
              color: 'white',
              fontSize: 48,
            }}>
            J
          </Text>
        </View>
        <Text
          style={{
            fontFamily: Fonts.mrSemiBold,
            fontSize: 24,
            marginTop: 8,
          }}>
          Jhon Doe
        </Text>
        <Text>121 years old</Text>
      </View>
      <View
        style={{
          marginTop: 24,
          paddingHorizontal: 24,
        }}>
        <TextInput placeholder="First Name" />
        <TextInput placeholder="Last Name" />
        <TextInput placeholder="Age" />
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: '#666AF6',
            paddingVertical: 14,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <Text
            style={{
              fontFamily: Fonts.mrSemiBold,
              color: 'white',
              fontSize: 18,
            }}>
            Save
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={{
            backgroundColor: '#FF4170',
            paddingVertical: 14,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontFamily: Fonts.mrSemiBold,
              color: 'white',
              fontSize: 18,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalContact;
