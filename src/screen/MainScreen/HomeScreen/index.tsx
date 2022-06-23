/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import React, {Fragment, useEffect, useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

import {MaterialIcon, Text} from '../../../Component';
import {Fonts} from '../../../constant';
import {useAppDispatch, useAppSelector} from '../../../helper';
import contactAction from '../../../store/Contact/contact.action';
import {RouteScreenProp} from '../../../type';

function HomeScreen() {
  const distpatch = useAppDispatch();
  const navigation = useNavigation<RouteScreenProp>();
  const contactState = useAppSelector(state => state.contact);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    distpatch(contactAction.getContactList());
  }, []);

  const renderItem = ({item}: {item: any}) => {
    return (
      <TouchableHighlight
        style={{
          // marginTop: 8,
          paddingVertical: 12,
          paddingHorizontal: 8,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomColor: '#979BA6',
          borderBottomWidth: 0.2,
          backgroundColor: 'white',
        }}>
        <>
          {item.photo !== 'N/A' ? (
            <Image
              source={{
                uri: item.photo,
              }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: '#666AF6',
              }}
            />
          ) : (
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: '#666AF6',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: Fonts.mrBold,
                  color: 'white',
                  fontSize: 18,
                }}>
                {item.firstName[0]}
              </Text>
            </View>
          )}
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: 14,
            }}>
            <Text
              style={{
                fontFamily: Fonts.mrSemiBold,
                fontSize: 16,
              }}>
              {item.firstName} {item.lastName}
            </Text>
            <Text
              style={{
                color: '#979BA6',
              }}>
              {item.age} years old
            </Text>
          </View>
        </>
      </TouchableHighlight>
    );
  };

  const deleteContact = (rowMap: any, rowKey: any) => {
    distpatch(
      contactAction.deleteContact(rowKey, res => {
        if (res) {
          if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
          }
          Alert.alert('Behasil Menhapus Contact');
        }
      }),
    );
  };

  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: 'white'}} />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            paddingVertical: 24,
            paddingHorizontal: 24,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: Fonts.mrExtraBold,
                  fontSize: 24,
                }}>
                People{' '}
              </Text>
              <Text>{`(${contactState.contact_list.length})`}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ModalContact');
              }}>
              <MaterialIcon
                name="account-plus"
                color="#666AF6"
                size="extraLarge"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialIcon color="#979BA6" size="large" name="magnify" />
            <TextInput
              value={search}
              onChangeText={e => setSearch(e.replace(/[^a-z0-9]/gi, ''))}
              placeholder="Search people"
              style={{
                backgroundColor: 'white',
                paddingVertical: 12,
                paddingHorizontal: 12,
                flex: 1,
              }}
            />
          </View>
          <View>
            <SwipeListView
              style={{
                marginTop: 6,
                height: '100%',
              }}
              data={contactState.contact_list.filter((item: any) => {
                return (
                  !item.firstName.search(search) ||
                  !item.lastName.search(search)
                );
              })}
              renderItem={item => renderItem(item)}
              keyExtractor={(item: any) => item.id}
              renderHiddenItem={(data: any, rowMap: any) => (
                <View style={styles.rowBack}>
                  <TouchableOpacity
                    onPress={() => deleteContact(rowMap, data.item.id)}
                    style={styles.backRightBtn}>
                    <MaterialIcon
                      color="white"
                      size="extraLarge"
                      name="delete-outline"
                    />
                  </TouchableOpacity>
                </View>
              )}
              rightOpenValue={-75}
            />
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    backgroundColor: 'red',
    right: 0,
  },
});

export default HomeScreen;
