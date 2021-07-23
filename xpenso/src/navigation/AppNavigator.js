import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef, isReadyRef} from './RootNavigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

/* Import screen js files */
import AuthLoadingScreen from '../screens/AuthLoading';
import Login from '../screens/Login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreenStacks = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const tabs = [
  {
    name: 'Home',
    iconName: 'home',
    type: 'MaterialCommunityIcons',
    hide: true,
    component: HomeScreenStacks,
  },
];

function BottomTab() {
  return (
    <Tab.Navigator>
      {tabs.map((tab) => {
        return (
          <Tab.Screen
            options={{unmountOnBlur: true}}
            initialParams={{
              iconName: tab.iconName,
              type: tab.type,
              hide: tab.hide,
            }}
            key={tab.name}
            name={tab.name}
            component={tab.component}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="AuthLoading"
          component={AuthLoadingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginStack}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={BottomTab} />
      </Stack.Navigator>
      {/* following is a quick fix to manage open menu from bottom tabs in android */}
    </NavigationContainer>
  );
}
