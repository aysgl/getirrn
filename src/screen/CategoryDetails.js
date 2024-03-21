import {ScrollView} from 'react-native';
import React from 'react';
import CategoryFiltering from '../components/CategoryFiltering';
import TypeFiltering from '../components/TypeFiltering';
import ProductContainer from '../components/ProductContainer';
import {COLOR} from '../theme/color';

export default function CategoryFilter(props) {
  const category = props.route.params.category;
  return (
    <ScrollView style={{backgroundColor: COLOR.WHITE}}>
      <CategoryFiltering category={category} />
      <TypeFiltering />
      <ProductContainer />
    </ScrollView>
  );
}
