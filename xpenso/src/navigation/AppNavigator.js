import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef, isReadyRef} from './RootNavigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTabBar from '../screens/MyTabBar';

/* Import screen js files */
import AuthLoading from '../screens/AuthLoading';
import Login from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';
import Settings from '../screens/Settings';
import SinglePage from '../screens/SinglePage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SinglePage"
        component={SinglePage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ListStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="List"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const SummaryStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Summary"
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
    iconName: 'md-pie-chart-sharp',
    type: 'Ionicons',
    name: 'List',
    component: ListStack,
  },
  {
    iconName: 'wallet',
    type: 'Entypo',
    name: 'Summary',
    component: SummaryStack,
  },
  {
    iconName: 'settings',
    type: 'Ionicons',
    name: 'Settings',
    component: SettingsStack,
  },
];

function BottomTab() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      {tabs.map((tab) => {
        return (
          <Tab.Screen
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
          component={AuthLoading}
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
