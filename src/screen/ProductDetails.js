/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import {COLOR} from '../theme/color';
import ProductProperty from '../components/ProductProperty';
import Button from '../components/Button';

export default function ProductDetails(props) {
  const product = props?.route?.params.product;

  return (
    <ScrollView style={{backgroundColor: COLOR.WHITE}}>
      <ImageCarousel images={product?.images} />
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 26, fontWeight: 'bold', color: COLOR.PURPLE}}>
          ${product?.fiyat}
        </Text>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{product?.name}</Text>
        <Text style={{fontSize: 14}}>{product?.miktar}</Text>
      </View>
      <ProductProperty />
      <Button title={'add to cart'} product={product} />
    </ScrollView>
  );
}
