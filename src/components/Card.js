/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import React from 'react';
import {COLOR} from '../theme/color';
import {
  Apple,
  Cake,
  DiscountShape,
  Drop,
  Like1,
  Lock1,
  Microphone,
  PathTool,
  RulerPen,
  Ship,
  Shop,
  Sun1,
} from 'iconsax-react-native';

export default function Card({data, onPress}) {
  const colorPalette = ['#5D2689', '#8736AA', '#F5BD1F', '#CEB8DF'];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorPalette.length);
    return colorPalette[randomIndex];
  };

  const isLightColor = color => {
    const lightColors = ['#5D2689', '#8736AA'];
    return lightColors.includes(color);
  };

  const iconColor = getRandomColor();
  const textColor = isLightColor(iconColor) ? 'white' : COLOR.PURPLE;

  const renderIcon = () => {
    switch (data.name) {
      case 'Discounts':
        return (
          <View
            style={[
              styles.icons,
              {
                height: data.height,
                backgroundColor: iconColor,
                color: 'red',
                // color: textColor,
              },
            ]}>
            <DiscountShape size={40} color={textColor} />
          </View>
        );

      case 'Water':
        return (
          <View
            style={[
              styles.icons,
              {
                height: data.height,
                backgroundColor: iconColor,
              },
            ]}>
            <Drop size={40} color={textColor} />
          </View>
        );
      case 'Fruits':
        return (
          <View
            style={[
              styles.icons,
              {
                height: data.height,
                backgroundColor: iconColor,
              },
            ]}>
            <Apple size={40} color={textColor} />
          </View>
        );
      case 'Bakery':
        return (
          <View
            style={[
              styles.icons,
              {
                height: data.height,
                backgroundColor: iconColor,
              },
            ]}>
            <Sun1 size={40} color={textColor} />
          </View>
        );

      case 'Grocery':
        return (
          <View
            style={[
              styles.icons,
              {
                height: data.height,
                backgroundColor: iconColor,
              },
            ]}>
            <Ship size={40} color={textColor} />
          </View>
        );

      case 'Snacks':
        return (
          <View
            style={[
              styles.icons,
              {
                height: data.height,
                backgroundColor: iconColor,
              },
            ]}>
            <Shop size={40} color={textColor} />
          </View>
        );

      case 'Ice Cream':
        return (
          <View
            style={[
              styles.icons,
              {
                height: data.height,
                backgroundColor: iconColor,
              },
            ]}>
            <RulerPen size={40} color={textColor} />
          </View>
        );

      case 'Products':
        return (
          <View
            style={[
              styles.icons,
              {
                height: data.height,
                backgroundColor: iconColor,
              },
            ]}>
            <PathTool size={40} color={textColor} />
          </View>
        );

      case 'Breakfast':
        return (
          <View
            style={[
              styles.icons,
              {
                height: data.height,
                backgroundColor: iconColor,
              },
            ]}>
            <Microphone size={40} color={textColor} />
          </View>
        );

      case 'Food':
        return (
          <View
            style={[
              styles.icons,
              {
                height: data.height,
                backgroundColor: iconColor,
              },
            ]}>
            <Cake size={40} color={textColor} />
          </View>
        );

      case 'Fit & Shape':
        return (
          <View
            style={[
              styles.icons,
              {
                height: data.height,
                backgroundColor: iconColor,
              },
            ]}>
            <Lock1 size={40} color={textColor} />
          </View>
        );

      case 'Personal Care':
        return (
          <View
            style={[
              styles.icons,
              {
                height: data.height,
                backgroundColor: iconColor,
              },
            ]}>
            <Like1 size={40} color={textColor} />
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      {renderIcon()}
      <Text
        style={{
          color: textColor,
          position: 'absolute',
          bottom: 20,
          left: 20,
          fontWeight: 'bold',
          fontSize: 12,
          textAlign: 'center',
        }}>
        {data.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icons: {
    width: 112,
    justifyContent: 'start',
    alignItems: 'flex-end',
    borderRadius: 16,
    padding: 10,
    // borderWidth: 2,
    // borderColor: '#e5e5e5',
    margin: 5,
  },
});
