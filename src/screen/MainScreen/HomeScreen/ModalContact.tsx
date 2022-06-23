/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as yup from 'yup';
import {useFormik} from 'formik';

import {RouteScreenProp} from '../../../type';
import {Fonts} from '../../../constant';
import {DismissKeyboardView, Text, TextInput} from '../../../Component';
import {useAppDispatch, useAppSelector} from '../../../helper';
import contactAction from '../../../store/Contact/contact.action';

const schema = yup.object().shape({
  firstName: yup.string().required().label('First Name'),
  lastName: yup.string().required().label('Last Name'),
  age: yup.number().required().label('Age'),
});

const ModalContact = () => {
  const distpatch = useAppDispatch();
  const navigation = useNavigation<RouteScreenProp>();
  const route = useRoute<any>();
  const detailState = useAppSelector(state => state.contact.contact_detail);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      age: '',
      photo: 'N/A',
    },
    validationSchema: schema,
    onSubmit: payload => {
      if (route.params?.editMode) {
        distpatch(
          contactAction.editContactList(detailState.id, payload, ress => {
            if (ress) {
              distpatch(
                contactAction.getContactList(resss => {
                  if (resss) {
                    Alert.alert('Berhasil mengubah contact');
                    navigation.goBack();
                  }
                }),
              );
            }
          }),
        );
      } else {
        distpatch(
          contactAction.addContactList(payload, ress => {
            if (ress) {
              distpatch(
                contactAction.getContactList(resss => {
                  if (resss) {
                    Alert.alert('Berhasil menambahkan contact');
                    navigation.goBack();
                  }
                }),
              );
            }
          }),
        );
      }
    },
  });

  useEffect(() => {
    if (route.params?.editMode) {
      // console.log('detailState ==> ', detailState);
      formik.setFieldValue('firstName', detailState.firstName);
      formik.setFieldValue('lastName', detailState.lastName);
      formik.setFieldValue('age', detailState.age.toString());
    }
  }, []);
  return (
    <DismissKeyboardView
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
            {formik.values.firstName[0]}
            {formik.values.lastName[0]}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: Fonts.mrSemiBold,
            fontSize: 24,
            marginTop: 8,
          }}>
          {formik.values.firstName} {formik.values.lastName}
        </Text>
        <Text>{formik.values.age && formik.values.age + ' years old'}</Text>
      </View>
      <View
        style={{
          marginTop: 24,
          paddingHorizontal: 24,
        }}>
        {/* <form onSubmit={formik.handleSubmit}> */}
        <TextInput
          isNoSpace
          placeholder="First Name"
          name="firstName"
          formik={formik}
        />
        <TextInput
          isNoSpace
          placeholder="Last Name"
          name="lastName"
          formik={formik}
        />
        <TextInput
          keyboardType="numeric"
          placeholder="Age"
          name="age"
          isNumber
          formik={formik}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => formik.handleSubmit()}
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
            {route.params?.editMode ? 'Update' : 'Save'}
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
        {/* </form> */}
      </View>
    </DismissKeyboardView>
  );
};

export default ModalContact;
