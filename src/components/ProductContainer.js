import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import ProductItem from './ProductItem';
import {COLOR} from '../theme/color';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../redux/productsAction';

export default function ProductContainer() {
  const dispatch = useDispatch();
  const state = useSelector(store => store.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        {state.products.slice(0, 2).map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </View>
      <View>
        <Text style={{fontWeight: 'bold', color: COLOR.GRAY, margin: 10}}>
          ÇUBUK
        </Text>
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {state.products.slice(2).map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </View>
    </View>
  );
}
