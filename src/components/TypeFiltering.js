/* eslint-disable react-native/no-inline-styles */
import {Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {height} from '../utils/dimension';
import {COLOR} from '../theme/color';

export default function TypeFiltering() {
  const [category, setCategory] = useState('Birlikte iyi gider');

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
      style={{
        backgroundColor: COLOR.WHITE,
        height: height * 0.07,
        paddingVertical: 10,
      }}>
      {['Birlikte iyi gider', 'Çubuk', 'Kutu', 'Külah', 'Çoklu', 'Bar'].map(
        (i, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setCategory(i)}
            style={{
              marginHorizontal: 4,
              justifyContent: 'center',
              borderRadius: 10,
              backgroundColor: i === category ? COLOR.PURPLE : COLOR.WHITE,
              paddingHorizontal: 10,
              shadowColor: 'black',
              shadowOpacity: 0.1,
              shadowOffset: {width: 0, height: 2},
              shadowRadius: 6,
              elevation: 5,
            }}>
            <Text
              style={{
                color: i === category ? COLOR.WHITE : COLOR.PURPLE,
                marginHorizontal: 1,
              }}>
              {i}
            </Text>
          </TouchableOpacity>
        ),
      )}
    </ScrollView>
  );
}
