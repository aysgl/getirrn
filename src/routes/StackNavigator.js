/* eslint-disable react/no-unstable-nested-components */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Apple, ArrowLeft, Bag, Cake, Home, Trash} from 'iconsax-react-native';
import HomeScreen from '../screen/HomeScreen';
import {COLOR} from '../theme/color';
import CategoryFilter from '../screen/CategoryDetails';
import ProductDetails from '../screen/ProductDetails';
import CartScreen from '../screen/CartScreen';
import {useDispatch, useSelector} from 'react-redux';
import {clearCart, getCarts} from '../redux/cartsAction';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector(store => store.carts);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getCarts());
    // dispatch(clearCart());
  }, [dispatch]);

  useEffect(() => {
    if (state.carts) {
      let totalPrice = 0;
      state.carts.forEach(item => {
        totalPrice += item.fiyat * item.adet;
      });
      setTotal(totalPrice);
    }
  }, [state.carts]);

  const handleClear = () => {
    dispatch(clearCart());
    navigation.navigate('Home Screen');
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerStyle: {backgroundColor: COLOR.PURPLE},
          headerTitle: () => (
            <View style={{flexDirection: 'row'}}>
              <Home size={24} color={COLOR.YELLOW} style={{marginEnd: 10}} />
              <Cake size={24} color={COLOR.YELLOW} style={{marginEnd: 10}} />
              <Apple size={24} color={COLOR.YELLOW} style={{marginEnd: 10}} />
            </View>
          ),
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
                    {total.toFixed(2)}
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
        options={{
          headerTintColor: COLOR.WHITE,
          headerBackTitleVisible: false,
          headerStyle: {backgroundColor: COLOR.PURPLE},
          headerTitle: 'Product Details',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeft />
            </TouchableOpacity>
          ),
        }}
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
            <TouchableOpacity onPress={() => handleClear()}>
              <Trash />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
