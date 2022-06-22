import React, {Fragment} from 'react';
import {TouchableOpacity, SafeAreaView} from 'react-native';
import {Text} from '../../../Component';
import {Dispatches} from '../../../constant';
import {useAppDispatch, useAppSelector} from '../../../helper';

function HomeScreen() {
  const dispatch = useAppDispatch();
  const contactState = useAppSelector(state => state.contact);

  const handleAdd = () => {
    dispatch({
      type: Dispatches.SET_NOMOR,
      payload: contactState.nomor + 1,
    });
  };

  const handleMin = () => {
    if (contactState.nomor > 0) {
      dispatch({
        type: Dispatches.SET_NOMOR,
        payload: contactState.nomor - 1,
      });
    }
  };

  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: 'white'}} />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Home Screen</Text>
        <Text>{contactState.nomor}</Text>
        <TouchableOpacity
          onPress={() => {
            handleAdd();
          }}
          activeOpacity={0.6}
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'gray',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            position: 'absolute',
            right: 20,
            bottom: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
            }}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleMin();
          }}
          activeOpacity={0.6}
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'gray',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            position: 'absolute',
            left: 20,
            bottom: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
            }}>
            -
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Fragment>
  );
}

export default HomeScreen;
