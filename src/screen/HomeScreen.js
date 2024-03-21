import {ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import MainCategories from '../components/MainCategories';
import {COLOR} from '../theme/color';

export default function HomeScreen() {
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{backgroundColor: COLOR.WHITE}}>
      <Header />
      <Carousel />
      {/* <MainCategories /> */}
    </ScrollView>
  );
}
