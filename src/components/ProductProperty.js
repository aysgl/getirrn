/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {View, Text} from 'react-native';
import React from 'react';
import {ArrowDown2} from 'iconsax-react-native';
import {COLOR} from '../theme/color';

export default function ProductProperty() {
  const details = [
    'Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti',
    'İçindekiler',
    'Besin Değerleri',
    'Kullanım',
  ];

  const TextComponent = ({detail, index}) => {
    return (
      <View
        style={{
          paddingVertical: 16,
          borderBottomWidth: 0.3,
          borderBottomColor: COLOR.LIGHTGRAY,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: COLOR.BLACK,
          }}>
          {detail}
        </Text>
        {index !== 0 && <ArrowDown2 size={16} color="#9F9F9F" />}
      </View>
    );
  };
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: 'white',
        marginBottom: 100,
      }}>
      {details.map((item, index) => (
        <TextComponent key={index} detail={item} index={index} />
      ))}
    </View>
  );
}
