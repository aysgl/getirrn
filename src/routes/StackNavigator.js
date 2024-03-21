/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ArrowLeft, Bag, Home, Trash} from 'iconsax-react-native';
import HomeScreen from '../screen/HomeScreen';
import {COLOR} from '../theme/color';
import CategoryFilter from '../screen/CategoryDetails';
import ProductDetails from '../screen/ProductDetails';
import CartScreen from '../screen/CartScreen';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{
          headerStyle: {backgroundColor: COLOR.PURPLE},
          headerTitle: () => <Home size={30} color={COLOR.YELLOW} />,
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilter}
        options={({navigation}) => ({
          headerTintColor: COLOR.WHITE,
          headerBackTitleVisible: false,
          headerStyle: {backgroundColor: COLOR.PURPLE},
          headerTitle: 'Products',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeft />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              style={{
                backgroundColor: COLOR.WHITE,
                borderRadius: 6,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Bag
                  size={18}
                  style={{color: COLOR.PURPLE, borderRadius: 6, margin: 6}}
                />
                <View
                  style={{
                    backgroundColor: COLOR.LIGHTGRAY,
                    height: '100%',
                    padding: 6,
                    borderRadius: 6,
                  }}>
                  <Text
                    style={{
                      color: COLOR.PURPLE,
                      marginLeft: 5,
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}>
                    $24.00
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({navigation}) => ({
          headerTintColor: COLOR.WHITE,
          headerBackTitleVisible: false,
          headerStyle: {backgroundColor: COLOR.PURPLE},
          headerTitle: 'Product Details',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeft />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={({navigation}) => ({
          headerTintColor: COLOR.WHITE,
          headerBackTitleVisible: false,
          headerStyle: {backgroundColor: COLOR.PURPLE},
          headerTitle: 'Cart',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeft />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
              <Trash />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
