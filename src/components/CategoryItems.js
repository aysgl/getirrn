/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {height, width} from '../utils/dimension';
import {COLOR} from '../theme/color';
import {useNavigation} from '@react-navigation/native';

export default function CategoryItems({cat}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CategoryDetails', {category: cat})}
      style={styles.card}>
      <Image
        source={{
          uri: cat.src,
        }}
        style={{
          width: width * 0.22,
          height: height * 0.1,
          borderRadius: 16,
          borderWidth: 2,
          borderColor: '#e5e5e5',
        }}
      />
      <Text style={{color: COLOR.PURPLE, fontSize: 12}}>{cat.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    width: width * 0.23,
    height: height * 0.16,
  },
});
