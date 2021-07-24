import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import Colors from '../constants/Colors';
import RNBootSplash from 'react-native-bootsplash';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AuthLoading(props) {
  useEffect(() => {
    async function getUserToken() {
      let user = JSON.parse(await AsyncStorage.getItem('user'));
      let navigationParams = {};
      let pageName = 'Home';
      if (user) {
        pageName = 'Home';
      }
      RNBootSplash.hide({
        fade: true,
      });
      props.navigation.replace(pageName, navigationParams);
    }

    getUserToken();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator size="large" color={Colors.primaryInvert} />
    </View>
  );
}
