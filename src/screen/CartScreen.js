/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCarts} from '../redux/cartsAction';
import {FlatList, View} from 'react-native';
import CartItem from '../components/CartItem';
import Button from '../components/Button';
import {COLOR} from '../theme/color';

export default function CartScreen() {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector(store => store.carts);

  useEffect(() => {
    dispatch(getCarts());
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

  return (
    <View style={{backgroundColor: COLOR.WHITE, flex: 1}}>
      <FlatList
        data={state.carts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <CartItem key={item.id} product={item} quantity={item.adet} />
        )}
      />
      <View>
        <Button title={'Continue'} price={total.toFixed(2)} />
      </View>
    </View>
  );
}
