import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';
import * as _ from 'lodash';
import Colors from '../constants/Colors';
import CustomIcons from '../components/CustomIcons';

export default function SinglePage(props) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.containerStyle}>
        <View>
          <View style={styles.section}>
            <Text style={styles.title}>User Entered Data</Text>
            <Text style={styles.paragraph}>
              All data entered in this app by user stores on user's device. The
              developer of this app has no means to access the data in any way.
              You are responsible for backing up the data in sdcard using sql
              backup or csv backup.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Ads</Text>
            <Text style={styles.paragraph}>
              We may display ads supplied by a third party ad provider, such as
              Google AdMob, AdSense, etc. These providers may be using cookies,
              or other technologies to collect information as a result of ad
              serving. There is no Ad in this 'Expenses' version.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>User Data Security</Text>
            <Text style={styles.paragraph}>
              'Expenses' is a fully offline app that uses 'SQLite' to store data
              and does not sync any data with the server it is highly secure for
              each and every user.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Contact Me</Text>
            <Text style={styles.paragraph}>
              If you have other questions or concerns about this Privacy Policy,
              please contact me at:
            </Text>
            <View style={styles.dataContainer}>
              <Text style={styles.fieldLabel}>Phone:</Text>
              <TouchableOpacity
                style={styles.fieldContainer}
                onPress={() => {
                  Linking.openURL('tel:7990850502');
                }}>
                <Text style={styles.fieldValue}>(+91)7990850502</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.fieldLabel}>Email:</Text>
              <TouchableOpacity
                style={styles.fieldContainer}
                onPress={() => {
                  Linking.openURL('mailto:dhruv.bhagat98@gmail.com');
                }}>
                <Text style={styles.fieldValue}>dhruv.bhagat98@gmail.com</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contactContainer}>
              <TouchableOpacity
                onPress={() => Linking.openURL('tel:+917990850502')}
                style={styles.contactIcon}>
                <CustomIcons
                  style={[styles.tabIcon]}
                  color={Colors.grey}
                  size={25}
                  type={'MaterialCommunityIcons'}
                  name={'phone'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('mailto:dhruvbhagat98@gmail.com')
                }
                style={styles.contactIcon}>
                <CustomIcons
                  style={[styles.tabIcon]}
                  color={Colors.grey}
                  size={25}
                  type={'MaterialCommunityIcons'}
                  name={'email'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://wa.me/+917990850502')}
                style={styles.contactIcon}>
                <CustomIcons
                  style={[styles.tabIcon]}
                  color={Colors.grey}
                  size={25}
                  type={'MaterialCommunityIcons'}
                  name={'whatsapp'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://www.linkedin.com/in/dhruv-bhagat-87186652',
                  )
                }
                style={styles.contactIcon}>
                <CustomIcons
                  style={[styles.tabIcon]}
                  color={Colors.grey}
                  size={25}
                  type={'MaterialCommunityIcons'}
                  name={'linkedin'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://www.instagram.com/bhagatdhruv/')
                }
                style={styles.contactIcon}>
                <CustomIcons
                  style={[styles.tabIcon]}
                  color={Colors.grey}
                  size={25}
                  type={'MaterialCommunityIcons'}
                  name={'instagram'}
                />
              </TouchableOpacity>
            </View>
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
  containerStyle: {
    flexGrow: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  title: {
    color: Colors.primary,
    paddingHorizontal: 10,
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  paragraph: {
    color: Colors.primaryInvert,
    padding: 10,
  },
  dataContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  fieldContainer: {
    padding: 10,
    marginVertical: -10,
  },
  fieldLabel: {
    color: Colors.primaryInvert,
    fontWeight: 'bold',
  },
  fieldValue: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  contactContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contactIcon: {
    padding: 10,
  },
});
