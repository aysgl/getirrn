/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {height, width} from '../utils/dimension';
import {COLOR} from '../theme/color';
import {AddSquare} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct} from '../redux/productsAction';

export default function ProductItem({item}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const state = useSelector(store => store.products);

  // useEffect(() => {
  //   dispatch(addCart());
  // }, [dispatch]);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails', (product = item))}
      style={{margin: 10, width: width * 0.28}}>
      <TouchableOpacity
        style={{zIndex: 2}}
        onPress={() => {
          dispatch(addProduct(item));
          navigation.navigate('Cart');
        }}>
        <AddSquare
          size={30}
          style={{
            color: COLOR.PURPLE,
            right: 0,
            position: 'absolute',
            zIndex: 1,
            margin: -8,
          }}
        />
      </TouchableOpacity>
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
          source={{
            uri: item.image,
          }}
          style={{
            width: width * 0.28,
            height: height * 0.14,
            // borderWidth: 1,
            // borderColor: COLOR.LIGHTGRAY,
            borderRadius: 20,
          }}
        />
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 10,
            textDecorationLine: 'line-through',
            marginEnd: 4,
            marginBottom: 6,
          }}>
          {item.fiyat}
        </Text>
        <Text style={{color: COLOR.PURPLE, fontWeight: 'bold'}}>
          {item.fiyatIndirimli}
        </Text>
      </View>
      <Text style={{fontWeight: 'bold', marginBottom: 6}}>{item.name}</Text>
      <Text style={{color: COLOR.GRAY, fontSize: 12}}>{item.miktar}</Text>
    </TouchableOpacity>
  );
}
