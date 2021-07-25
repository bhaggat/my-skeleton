import React, {useEffect, useState, useCallback} from 'react';

import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';
import * as _ from 'lodash';
import Colors from '../constants/Colors';

import {TouchableOpacity as GhTouchable} from 'react-native-gesture-handler';
import moment from 'moment';
import currencyFormatter from 'currency-formatter';

import CustomIcons from '../components/CustomIcons';
import GlobalStyles from '../constants/GlobalStyles';
export default function HomeScreen(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = [
      {
        title: 'This is test',
        description: 'this is test1',
        datetime: '2020-05-06 20:05:30',
        id: '13213',
        price: 5040,
        isCredit: true,
      },
      {
        title: '2 This is test',
        description: 'thi dfs is test1',
        datetime: '2020-05-05 20:05:30',
        id: '5wwef2364',
        isCredit: true,
        price: 5004,
      },
      {
        title: 'This is tesdv  t',
        description:
          'this is tgvw gwerg erhrth rthrthrthh rth erg ergerg ertrh rthrth rthrth est1',
        datetime: '2020-05-04 20:05:30',
        id: '1sdwt3213',
        isCredit: true,
        price: 5500,
      },
      {
        title: 'This is tesdv s t',
        description:
          'this is tgvw gwerg erhrth rthrthrthh rth erg ergerg ertrh rthrth rthrth est1',
        datetime: '2020-05-04 20:05:30',
        id: '1tczx321s3',
        isCredit: true,
        price: 50,
      },
      {
        title: '2 This is test',
        description: 'thi dfs is test1',
        datetime: '2020-05-04 20:05:30',
        id: '5ew6d4',
        isCredit: true,
        price: 500,
      },
      {
        title: 'This is tesdv  t',
        description:
          'this is tgvw gwerg erhrth rthrthrthh rth erg ergerg ertrh rthrth rthrth est1',
        datetime: '2020-05-03 20:05:30',
        id: '1t3dfsd213',
        price: 500,
      },
      {
        title: 'This iadf fs tesdv  t',
        description:
          'this is tgvw gwerg erhrth rthrthrthh rth erg ergerg ertrh rthrth rthrth est1',
        datetime: '2020-05-03 20:05:30',
        id: '1t3d2sfsdffdss13',
        price: 500,
      },
      {
        title: 'This is test',
        description: 'this is test1',
        datetime: '2020-05-06 20:05:30',
        id: 'fds',
        isCredit: true,
        price: 500,
      },
      {
        title: '2 This is test',
        description: 'thi dfs is test1',
        datetime: '2020-05-05 20:05:30',
        id: '56fs4s',
        price: 500,
      },
      {
        title: 'This is tesdv  t',
        description:
          'this is tgvw gwerg erhrth rthrthrthh rth erg ergerg ertrh rthrth rthrth est1',
        datetime: '2020-05-04 20:05:30',
        id: '1t3s2fsd13',
        price: 500,
      },
      {
        title: 'This is tesdv s t',
        description:
          'this is tgvw gwerg erhrth rthrthrthh rth erg ergerg ertrh rthrth rthrth est1',
        datetime: '2020-05-04 20:05:30',
        id: '1t3s21dss3',
        isCredit: true,
        price: 500,
      },
      {
        title: '2 This is test',
        description: 'thi dfs is test1',
        datetime: '2020-05-04 20:05:30',
        id: '56sdfsd4',
        price: 500,
      },
      {
        title: 'This is tesdv  t',
        description:
          'this is tgvw gwerg erhrth rthrthrthh rth erg ergerg ertrh rthrth rthrth est1',
        datetime: '2020-05-03 20:05:30',
        id: '1t3dfsd2s13',
        price: 500,
      },
      {
        title: 'This iadf fs tesdv  t',
        description:
          'this is tgvw gwerg erhrth rthrthrthh rth erg ergerg ertrh rthrth rthrth est1',
        datetime: '2020-05-03 20:05:30',
        id: '1t3d2sfsds13',
        isCredit: true,
        price: 500,
      },
    ];
    let final = [];

    let counter = 0;
    let lastDay = 0;
    newData.forEach((data) => {
      data.day = moment(data.datetime).format('DD');
      data.week = moment(data.datetime).format('ddd');
      if (lastDay != data.day) {
        console.log({lastDay, day: data.day});
        lastDay = data.day;
        if (counter === Colors.listColors.length - 1) {
          counter = 0;
        } else {
          counter++;
        }
      }
      data.color = Colors.listColors[counter];
      final.push(data);
    });
    setData(final);
  }, []);

  const keyExtractor = useCallback((item) => `${item.id}`, []);

  const renderItem = ({item, index}) => {
    console.log('index', index);
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        extraButtonProps={{
          rippleColor: Colors.grey,
        }}>
        <View style={[styles.leftContainer, {backgroundColor: item.color}]}>
          <Text style={styles.day}>{item.day}</Text>
          <Text style={styles.week}>{item.week}</Text>
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.price(item.isCredit)}>
            {currencyFormatter.format(item.price, {code: 'INR'})}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>List</Text>
        </View>
        <View style={styles.subHeaderContainer}>
          <GhTouchable containerStyle={styles.subLabelContainer}>
            <Text style={styles.subLabel}>Earned</Text>
            <Text style={styles.subLabelValue}>
              {currencyFormatter.format(500, {code: 'INR'})}
            </Text>
          </GhTouchable>
          <GhTouchable containerStyle={styles.subLabelContainer}>
            <Text style={styles.subLabel}>Earned</Text>
            <Text style={styles.subLabelValue}>
              {currencyFormatter.format(500, {code: 'INR'})}
            </Text>
          </GhTouchable>
          <GhTouchable containerStyle={styles.subLabelContainer}>
            <Text style={styles.subLabel}>Earned</Text>
            <Text style={styles.subLabelValue}>
              {currencyFormatter.format(500, {code: 'INR'})}
            </Text>
          </GhTouchable>
        </View>
        <View style={styles.filterContainer}>
          <GhTouchable style={styles.iconContainer}>
            <CustomIcons
              type={'Entypo'}
              color={'#fff'}
              name={'chevron-left'}
              size={20}
            />
          </GhTouchable>
          <GhTouchable style={styles.textContainer}>
            <Text style={styles.text}>January</Text>
          </GhTouchable>
          <GhTouchable style={styles.textContainer}>
            <Text style={styles.text}>2021</Text>
          </GhTouchable>
          <GhTouchable style={styles.iconContainer}>
            <CustomIcons
              type={'Entypo'}
              color={'#fff'}
              name={'chevron-right'}
              size={20}
            />
          </GhTouchable>
          <GhTouchable style={styles.viewType}>
            <CustomIcons
              type={'Ionicons'}
              color={'#fff'}
              name={'md-calendar'}
              size={20}
            />
          </GhTouchable>
        </View>
        <FlatList
          data={data}
          contentContainerStyle={styles.flatListContainer}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.seprator} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.themeBg,
  },
  flatListContainer: {
    paddingVertical: 5,
  },
  containerStyle: {
    flexGrow: 1,
    paddingHorizontal: 5,
  },
  scrollContainer: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: Colors.primary,
    padding: 10,
  },
  subHeaderContainer: {
    flexGrow: 1,
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
  },
  filterContainer: {
    backgroundColor: Colors.primaryBg,
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    padding: 10,
    flexShrink: 1,
    width: (GlobalStyles.windowWidth - 120) / 2,
  },
  iconContainer: {
    padding: 10,
  },
  viewType: {
    backgroundColor: Colors.primary,
    padding: 10,
  },
  text: {
    color: Colors.primaryInvert,
    textAlign: 'center',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.primaryInvert,
    textAlign: 'center',
  },
  subLabelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  subLabel: {
    color: Colors.primaryInvert,
    fontWeight: '700',
  },
  subLabelValue: {
    color: Colors.primaryInvert,
    fontWeight: 'bold',
    fontSize: 13,
  },
  seprator: {
    height: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  leftContainer: {
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  day: {
    color: Colors.primaryInvert,
    fontSize: 17.5,
    lineHeight: 18,
    textAlign: 'center',
  },
  week: {
    color: Colors.primaryInvert,
    fontSize: 11.5,
    lineHeight: 11.5,
    textAlign: 'center',
  },
  middleContainer: {
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  title: {
    color: Colors.primaryInvert,
    fontWeight: 'bold',
    lineHeight: 16,
  },
  description: {
    color: Colors.primaryInvert,
    fontSize: 11,
    opacity: 0.9,
  },
  rightContainer: {
    justifyContent: 'center',
  },
  price: (isCredit) => ({
    color: isCredit ? Colors.primary : Colors.secondary,
    fontWeight: 'bold',
    fontSize: 13,
  }),
});
