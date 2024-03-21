/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLOR} from '../theme/color';
import {Gift, Home, Menu, SearchNormal1, User} from 'iconsax-react-native';
import {StackNavigator} from './StackNavigator';
import {TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

export function RootNavigator() {
  const CustomTabBar = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: COLOR.PURPLE,
          color: COLOR.YELLOW,
          borderRadius: 60,
          padding: 20,
        }}>
        <Menu size={30} color={COLOR.YELLOW} />
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLOR.PURPLE,
        tabBarInactiveTintColor: COLOR.GRAY,
        headerShown: false,
        tabBarStyle: route.name === 'ProductDetails' ? {display: 'none'} : null,
      })}>
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarIcon: ({color}) => <Home size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={StackNavigator}
        options={{
          tabBarIcon: ({color}) => <SearchNormal1 size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={StackNavigator}
        options={{
          tabBarIcon: ({color}) => <CustomTabBar color={color} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={StackNavigator}
        options={{
          tabBarIcon: ({color}) => <User size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Gift"
        component={StackNavigator}
        options={{
          tabBarIcon: ({color}) => <Gift size={20} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
