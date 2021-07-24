import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  Switch,
} from 'react-native';
import CustomIcons from '../components/CustomIcons';
import Colors from '../constants/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  getVersion,
  getBuildNumber,
  getApplicationName,
} from 'react-native-device-info';
import LocalIcons from '../constants/LocalIcons';

export default function Settings(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleDarkMode = () => setIsDarkMode((previousState) => !previousState);

  useEffect(() => {}, []);

  const pages = [
    {
      pageName: 'SinglePage',
      params: {
        page: 'Policy',
      },
      title: 'Privacy Policy',
    },
    {
      pageName: 'Share',
      title: 'Share App',
    },
    {
      pageName: 'Rate',
      title: 'Rate App',
    },
    {
      pageName: 'SinglePage',
      params: {
        page: 'About',
      },
      title: 'About',
    },
  ];

  const managePages = [
    {
      pageName: 'ManageAutoAdds',
      title: 'Manage Monthly Auto Adds',
    },
    {
      pageName: 'ManageCategories',
      title: 'Manage Categories',
    },
    {
      pageName: 'ManageBackup',
      title: 'Manage Bakcup',
    },
  ];

  const navigateTo = (page) => {
    console.log('pnavigateToage', page);
    props.navigation.navigate(page.pageName, page.params || {});
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.containerStyle}>
        <View style={styles.sectionContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>App Settings</Text>
          </View>
          <TouchableOpacity
            onPress={toggleDarkMode}
            activeOpacity={1}
            extraButtonProps={{
              rippleColor: Colors.grey,
            }}
            style={styles.itemContainer}>
            <Text style={styles.label}>Dark Mode</Text>
            <Switch
              trackColor={{false: Colors.grey, true: Colors.grey}}
              thumbColor={isDarkMode ? Colors.primary : Colors.primaryInvert}
              ios_backgroundColor={Colors.grey}
              onValueChange={toggleDarkMode}
              value={isDarkMode}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleSwitch}
            activeOpacity={1}
            extraButtonProps={{
              rippleColor: Colors.grey,
            }}
            style={styles.itemContainer}>
            <View style={styles.item}>
              <Text style={styles.label}>Autofills &amp; Suggestions</Text>
              <Text style={styles.description}>
                Suggestions while adding expense
              </Text>
            </View>
            <Switch
              trackColor={{false: Colors.grey, true: Colors.grey}}
              thumbColor={isEnabled ? Colors.primary : Colors.primaryInvert}
              ios_backgroundColor={Colors.grey}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Manage Data</Text>
          </View>
          {managePages.map((page) => {
            return (
              <TouchableOpacity
                key={page.title}
                onPress={() => navigateTo(page)}
                activeOpacity={1}
                extraButtonProps={{
                  rippleColor: Colors.grey,
                }}
                style={styles.itemContainer}>
                <Text style={styles.label}>{page.title}</Text>
                <CustomIcons
                  style={[styles.tabIcon]}
                  color={Colors.grey}
                  size={25}
                  type={'MaterialIcons'}
                  name={'keyboard-arrow-right'}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>General Settings</Text>
          </View>
          {pages.map((page) => {
            return (
              <TouchableOpacity
                key={page.title}
                onPress={() => navigateTo(page)}
                activeOpacity={1}
                extraButtonProps={{
                  rippleColor: Colors.grey,
                }}
                style={styles.itemContainer}>
                <Text style={styles.label}>{page.title}</Text>
                <CustomIcons
                  style={[styles.tabIcon]}
                  color={Colors.grey}
                  size={25}
                  type={'MaterialIcons'}
                  name={'keyboard-arrow-right'}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.versionContainer}>
          <Image style={styles.logo} source={LocalIcons.pngIconSet.logo} />
          <Text style={styles.versionName}>{getApplicationName()}</Text>
          <Text style={styles.versionText}>
            Version {getVersion()} ({getBuildNumber()})
          </Text>
          <View style={styles.version}>
            <Text style={styles.versionText}>Made</Text>
            <CustomIcons
              style={[styles.heartIcon]}
              color={'#dd0000'}
              size={14}
              type={'Fontisto'}
              name={'heart'}
            />
            {/* <SvgUri width={40} height={40} svgXmlData={InFlag} /> */}
            {/* <InFlag width={40} height={40} /> */}
            <Text style={styles.versionText}>love in India</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.themeBg,
  },
  scrollContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  title: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerStyle: {
    flexGrow: 1,
    paddingHorizontal: 5,
  },
  sectionContainer: {
    marginTop: 10,
  },
  itemContainer: {
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  item: {
    flexGrow: 1,
    flexShrink: 1,
  },
  label: {
    color: Colors.primaryInvert,
    fontSize: 15,
  },
  description: {
    color: Colors.grey,
    fontSize: 12,
  },
  versionContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  versionName: {
    padding: 3,
    color: Colors.primaryInvert,
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'capitalize',
  },
  version: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  versionText: {
    padding: 3,
    fontSize: 13,
    color: Colors.primaryInvert,
    alignItems: 'center',
  },
  heartIcon: {
    paddingHorizontal: 5,
  },
  logo: {
    height: 58,
    width: 58,
    padding: 8,
  },
});
