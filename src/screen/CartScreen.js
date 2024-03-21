import {View, FlatList, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import CartItem from '../components/CartItem';
import {COLOR} from '../theme/color';
import Button from '../components/Button';
import ProductItem from '../components/ProductItem';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../redux/productsAction';

export default function CartScreen() {
  const dispatch = useDispatch();
  const state = useSelector(store => store.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <View style={{backgroundColor: COLOR.WHITE, flex: 1}}>
      <FlatList
        data={state.products.slice(0, 2)}
        renderItem={({item}) => <CartItem product={item} />}
      />
      <ScrollView
        style={{marginTop: -120}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {state.products.slice(2).map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </ScrollView>
      <View>
        <Button title={'Continue'} price={'24.00'} />
      </View>
    </View>
  );
}
