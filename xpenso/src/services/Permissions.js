import {Alert, Platform, PermissionsAndroid} from 'react-native';

async function openSettingsPopup(type) {
  var component = require('react-native-permissions');
  const {openSettings} = component;
  Alert.alert(
    'Permission Required',
    `Please enable ${type} permissions in settings.`,
    [
      {
        text: 'Open Setting',
        onPress: openSettings,
        style: 'destructive',
      },
      {text: 'Cancel'},
    ],
    {cancelable: false},
  );
}

export async function askPhotoPermission() {
  if (Platform.OS === 'ios') {
    var component = require('react-native-permissions');
    const {request, RESULTS, PERMISSIONS} = component;
    const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);

    switch (result) {
      case RESULTS.UNAVAILABLE:
        break;
      case RESULTS.DENIED:
        openSettingsPopup('photo');
        break;
      case RESULTS.GRANTED:
        return true;
        break;
      case RESULTS.BLOCKED:
        openSettingsPopup('photo');
        break;
    }
  } else {
    return true;
    // let grantPermission = await PermissionsAndroid.check(
    //   PermissionsAndroid.PERMISSIONS.PHOTO_LIBRARY,
    // );
    // if (!grantPermission) {
    //   grantPermission = await PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.PHOTO_LIBRARY,
    //     {
    //       title: `Photo Library Permission`,
    //       message: `The app needs access to your photo gallery upload image`,
    //       buttonNegative: 'Cancel',
    //       buttonPositive: 'OK',
    //     },
    //   );
    // }
    // return grantPermission;
  }
}

export async function askCameraPermission() {
  if (Platform.OS === 'ios') {
    var component = require('react-native-permissions');
    const {request, RESULTS, PERMISSIONS} = component;
    const result = await request(PERMISSIONS.IOS.CAMERA);
    console.log('result', result);
    switch (result) {
      case RESULTS.UNAVAILABLE:
        break;
      case RESULTS.DENIED:
        openSettingsPopup('camera');
        break;
      case RESULTS.GRANTED:
        return true;
        break;
      case RESULTS.BLOCKED:
        openSettingsPopup('camera');
        break;
    }
  } else {
    let grantPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (!grantPermission) {
      grantPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: `Camera Permission`,
          message: `The app needs access to your camera to capture and upload image`,
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
    }
    return grantPermission;
  }
}

export async function askMediaPermission() {
  if (Platform.OS === 'ios') {
    var component = require('react-native-permissions');
    const {request, RESULTS, PERMISSIONS} = component;
    const result = await request(PERMISSIONS.IOS.MEDIA_LIBRARY);

    switch (result) {
      case RESULTS.UNAVAILABLE:
        break;
      case RESULTS.DENIED:
        openSettingsPopup('photos');
        break;
      case RESULTS.GRANTED:
        return true;
        break;
      case RESULTS.BLOCKED:
        openSettingsPopup('photos');
        break;
    }
  } else {
    return true;
    // console.log('askMediaPermission');
    // let grantPermission = false;
    // console.log('askMediaPermission grantPermission', grantPermission);
    // if (!grantPermission) {
    //   grantPermission = await PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.MEDIA_LIBRARY,
    //     {
    //       title: `Media library Permission`,
    //       message: `The app needs access to your media library to upload file`,
    //       buttonNegative: 'Cancel',
    //       buttonPositive: 'OK',
    //     },
    //   );
    //   console.log('grantPermission', grantPermission);
    // }
    // return grantPermission;
  }
}
