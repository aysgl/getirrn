/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MasonryFlatlist from 'react-native-masonry-grid';
import Card from './Card';

export default function MainCategories({data}) {
  const navigation = useNavigation();
  return (
    <MasonryFlatlist
      data={data}
      numColumns={3}
      columnWrapperStyle={styles.columnWrapperStyle}
      showsVerticalScrollIndicator={false}
      style={styles.masonryFlatlist}
      renderItem={({item, index}) => {
        return (
          <Card
            data={item}
            onPress={() =>
              navigation.navigate('CategoryDetails', {category: item})
            }
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  columnWrapperStyle: {
    marginTop: 0,
    gap: 10,
  },
  masonryFlatlist: {
    display: 'flex',
    margin: 10,
  },
});
