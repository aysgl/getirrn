/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {COLOR} from '../theme/color';
import {height, width} from '../utils/dimension';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../redux/categoriesAction';

const CategoryBox = ({item, active}) => {
  return (
    <View
      style={{
        borderBottomColor:
          active.name === item.name ? COLOR.YELLOW : 'transparent',
        borderBottomWidth: active.name === item.name ? 4 : 0,
      }}>
      <Text
        style={{
          color: COLOR.WHITE,
          lineHeight: height * 0.05,
          backgroundColor: COLOR.LIGHTPURPLE,
          marginHorizontal: 10,
        }}>
        {item.name}
      </Text>
    </View>
  );
};

export default function CategoryFiltering({category}) {
  const dispatch = useDispatch();
  const state = useSelector(store => store.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
      style={{
        width: width,
        backgroundColor: COLOR.LIGHTPURPLE,
        height: height * 0.05,
      }}>
      <View style={{flexDirection: 'row'}}>
        {state.categories.map((cat, index) => (
          <CategoryBox key={index} item={cat} active={category} />
        ))}
      </View>
    </ScrollView>
  );
}
