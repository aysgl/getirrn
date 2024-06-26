/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {width} from '../utils/dimension';
import {COLOR} from '../theme/color';
import {addToCart} from '../redux/cartsAction';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

export default function Button({title, price, product}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const productWithQuantity = {...product, adet: 1};
    dispatch(addToCart(productWithQuantity));
    navigation.navigate('Cart');
  };

  return (
    <TouchableOpacity
      onPress={() => handleAddToCart()}
      style={{
        width: width - 20,
        backgroundColor: COLOR.YELLOW,
        padding: 15,
        margin: 10,
        borderRadius: 60,
        position: 'absolute',
        bottom: 0,
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: price ? 'space-between' : 'center',
        paddingHorizontal: 20,
      }}>
      <Text
        style={{color: COLOR.WHITE, fontWeight: 'bold', textAlign: 'center'}}>
        {title}
      </Text>
      <View
        style={{
          backgroundColor: COLOR.WHITE,
          borderRadius: 30,
          paddingVertical: 5,
          marginStart: 10,
        }}>
        {price && (
          <Text
            style={{
              paddingHorizontal: 20,
              color: COLOR.PURPLE,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            ${price}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
