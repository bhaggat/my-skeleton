import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Easing,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

import CustomIcons from '../components/CustomIcons';
import Colors from '../constants/Colors';
import GlobalStyles from '../constants/GlobalStyles';
import * as _ from 'lodash';
import {globalVariables} from '../services/GlobalVariables';

export default function MyTabBar({state, descriptors, navigation}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const dispatch = useDispatch();
  const reduxState = useSelector(
    ({events, myInbox, teamInbox, collections}) => ({
      eventsSelectedId: events.selectedEventId,
      teamInboxSelectedEventId: teamInbox.selectedEventId,
      eventsNotification: !_.isEmpty(events.notification),
      myInboxNotification: !_.isEmpty(myInbox.notification),
      teamInboxNotification: !_.isEmpty(teamInbox.notification),
      teamChatNotification:
        collections.notification.GR?.length ||
        collections.notification.DM?.length,
    }),
    shallowEqual,
  );

  function onLogoutPress() {
    setIsMenuOpen(false);
    dispatch(authAction.logout());
  }

  function showClearNotificationAlert() {
    Alert.alert(
      'Clear Notification',
      'Are you sure you want to clear all notifications?',
      [
        {
          text: 'Cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            dispatch(authAction.clearAllNotification());
            setIsMenuOpen(false);
          },
        },
      ],
    );
  }

  function onTabPress(route, isFocused) {
    setIsMenuOpen(false);
    if (route.name !== globalVariables.activeBottomTab) {
      onPress(route, isFocused);
      dispatch(authAction.setBottomActiveTab(route.name));
    }
  }

  const menuItems = [
    {
      iconName: 'home',
      type: 'Ionicons',
      navigateTo: 'Home',
    },
    {
      iconName: 'bell',
      type: 'Entypo',
    },
  ];

  const styles = StyleSheet.create({
    mainContainer: {
      height: getBottomSpace() + 65,
      backgroundColor: Colors.primary,
      paddingBottom: getBottomSpace(),
    },
    menuItemsContainer: {
      width: 65,
      backgroundColor: Colors.secondary,
      borderTopRightRadius: 10,
    },
    logoutContainer: {
      borderTopRightRadius: 10,
      backgroundColor: Colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 12,
      height: 65,
    },
    innerContainer: {
      flexDirection: 'row',
      height: 65,
    },
    menuContainer: {
      width: 65,
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuIconContainer: {
      backgroundColor: Colors.secondary,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuIcon: {
      padding: 6,
      color: '#fff',
      textAlign: 'center',
    },
    tabsContainer: {
      flexGrow: 1,
      flexDirection: 'row',
    },
    tabContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      minHeight: 60,
    },
    activeTabContainer: {
      backgroundColor: Colors.primaryActive,
    },
    tabIcon: {
      marginBottom: 7,
    },
    tabLabel: {
      textAlign: 'center',
      color: '#ffffff',
      fontSize: 12.5,
    },
    notificationDot: {
      position: 'absolute',
      top: 12,
      right: 14,
      height: 9,
      width: 9,
      backgroundColor: Colors.unapproved,
      borderRadius: 50,
    },
  });

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const onPress = (route, isFocused) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function renderMenu() {
    const hasNotification =
      reduxState.eventsNotification ||
      reduxState.myInboxNotification ||
      reduxState.teamInboxNotification ||
      reduxState.teamChatNotification;
    return (
      <View style={[styles.menuItemsContainer]}>
        <TouchableOpacity
          style={styles.logoutContainer}
          onPress={onLogoutPress}>
          <CustomIcons
            type={'MaterialCommunityIcons'}
            name={'logout'}
            color={'#ffffff'}
            color={'white'}
            size={30}
          />
        </TouchableOpacity>
        {menuItems.map((item) => {
          if (item.iconName === 'bell' && !hasNotification) {
            return null;
          }
          return (
            <TouchableOpacity
              style={[
                styles.tabContainer,
                {
                  backgroundColor:
                    item.iconName === 'bell' ? Colors.red : Colors.secondary,
                },
              ]}
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel={item.iconName}
              onPress={() => {
                setIsMenuOpen(false);
                if (item.navigateTo) {
                  dispatch(authAction.setBottomActiveTab(item.navigateTo));
                  navigation.navigate(item.navigateTo);
                } else {
                  if (item.iconName === 'bell') {
                    showClearNotificationAlert();
                  }
                }
              }}
              key={item.iconName}>
              <View>
                <CustomIcons
                  style={[styles.tabIcon]}
                  color={'#ffffff'}
                  size={30}
                  type={item.type}
                  name={item.iconName}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Popover
          placement={PopoverPlacement.TOP}
          isVisible={isMenuOpen}
          popoverStyle={{
            backgroundColor: 'transparent',
            borderRadius: 0,
            marginLeft: -10,
          }}
          animationConfig={{
            duration: 0,
            delay: 0,
            easing: Easing.inOut(Easing.quad),
          }}
          arrowStyle={{
            height: 0,
            width: 0,
          }}
          // debug={true}
          onRequestClose={() => setIsMenuOpen(false)}
          from={
            <TouchableOpacity
              style={styles.menuContainer}
              onPress={() => {
                toggleMenu();
              }}>
              <View style={styles.menuIconContainer}>
                <CustomIcons
                  type={'Entypo'}
                  size={21}
                  name="menu"
                  style={styles.menuIcon}
                />
              </View>
            </TouchableOpacity>
          }>
          {renderMenu()}
        </Popover>
        <View style={GlobalStyles.divider} />
        <View style={styles.tabsContainer}>
          {state.routes.map((route, index) => {
            if (route.params.hide) {
              return null;
            }
            const isFocused = state.index === index;
            let showNotificationDot;
            if (route.name === 'Events') {
              if (!reduxState.eventsSelectedId) {
                return null;
              }
              showNotificationDot = reduxState.eventsNotification;
            } else if (route.name === 'My Inbox') {
              if (!reduxState.teamInboxSelectedEventId) {
                return null;
              }
              showNotificationDot = reduxState.myInboxNotification;
            } else if (route.name === 'Team Inbox') {
              if (
                !reduxState.teamInboxSelectedEventId &&
                !reduxState.eventsSelectedId
              ) {
                return null;
              }
              showNotificationDot = reduxState.teamInboxNotification;
            } else if (route.name === 'Team Chat') {
              showNotificationDot = reduxState.teamChatNotification;
            }
            return (
              <TouchableOpacity
                style={[
                  styles.tabContainer,
                  isFocused ? styles.activeTabContainer : {},
                ]}
                key={route.name}
                accessible={true}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={route.name}
                onPress={() => onTabPress(route, isFocused)}>
                {showNotificationDot ? (
                  <View style={styles.notificationDot}></View>
                ) : null}
                <CustomIcons
                  style={[styles.tabIcon]}
                  color={'#ffffff'}
                  size={23}
                  type={route.params.type}
                  name={route.params.iconName}
                />
                <Text style={styles.tabLabel}>{route.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}
