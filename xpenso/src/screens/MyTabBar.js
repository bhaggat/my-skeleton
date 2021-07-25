import React from 'react';
import {View, StyleSheet} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {TouchableOpacity} from 'react-native-gesture-handler';

import CustomIcons from '../components/CustomIcons';
import Colors from '../constants/Colors';

export default function MyTabBar({state, navigation}) {
  const styles = StyleSheet.create({
    mainContainer: {
      height: getBottomSpace() + 55,
      backgroundColor: Colors.primaryBg,
      paddingBottom: getBottomSpace(),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    outerTabContainer: {
      height: getBottomSpace() + 55,
      flexGrow: 1,
      justifyContent: 'center',
      overflow: 'hidden',
    },
    tabContainer: {
      borderRadius: 42,
      marginVertical: -20,
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    activeTabContainer: {},
  });

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

  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        if (route.params.hide) {
          return null;
        }
        const isFocused = state.index === index;
        return (
          <View key={route.name} style={styles.outerTabContainer}>
            <TouchableOpacity
              containerStyle={[
                styles.tabContainer,
                isFocused ? styles.activeTabContainer : {},
              ]}
              accessible={true}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={route.name}
              activeOpacity={1}
              extraButtonProps={{
                rippleColor: Colors.primaryTilt,
              }}
              onPress={() => onPress(route, isFocused)}>
              <CustomIcons
                style={[styles.tabIcon]}
                color={isFocused ? Colors.primary : Colors.primaryInvert}
                size={26}
                type={route.params.type}
                name={route.params.iconName}
              />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}
