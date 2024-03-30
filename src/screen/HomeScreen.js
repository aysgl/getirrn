/* eslint-disable react-native/no-inline-styles */
import {ScrollView, View} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import MainCategories from '../components/MainCategories';
import {COLOR} from '../theme/color';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../redux/categoriesAction';

export default function HomeScreen() {
  const state = useSelector(state => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{
        backgroundColor: COLOR.WHITE,
        flex: 1,
      }}>
      <View>
        <Header />
        <MainCategories data={state.categories} />
      </View>
    </ScrollView>
  );
}
