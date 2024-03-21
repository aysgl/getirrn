/* eslint-disable react-native/no-inline-styles */
import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {height, width} from '../utils/dimension';
import {COLOR} from '../theme/color';

export default function CartItem({product}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: width * 0.4,
        }}>
        <View
          style={{
            borderRadius: 20,
            backgroundColor: 'white',
            shadowColor: 'black',
            shadowOpacity: 0.1,
            shadowOffset: {width: 0, height: 2},
            shadowRadius: 6,
            elevation: 5,
          }}>
          <Image
            source={{uri: product.image}}
            style={{
              width: width * 0.3,
              height: height * 0.14,
            }}
          />
        </View>
        <View style={{marginStart: 10}}>
          <Text style={{fontWeight: 'bold', marginBottom: 4}}>
            {product.name}
          </Text>
          <Text style={{color: COLOR.GRAY, fontSize: 12, marginBottom: 10}}>
            {product.miktar}
          </Text>
          <Text style={{color: COLOR.PURPLE, fontWeight: 'bold'}}>
            {product.fiyatIndirimli}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 4,
          borderWidth: 1,
          borderColor: COLOR.LIGHTGRAY,
          backgroundColor: COLOR.WHITE,
          shadowColor: 'black',
          shadowOpacity: 0.1,
          shadowOffset: {width: 0, height: 2},
          shadowRadius: 6,
          elevation: 5,
        }}>
        <TouchableOpacity>
          <Text
            style={{
              padding: 6,
              paddingHorizontal: 10,
            }}>
            -
          </Text>
        </TouchableOpacity>
        <View style={{backgroundColor: COLOR.PURPLE}}>
          <Text
            style={{
              padding: 6,
              paddingHorizontal: 10,
              color: COLOR.WHITE,
            }}>
            0
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={{padding: 6, paddingHorizontal: 10}}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
