import {Text, View} from 'react-native';
import React from 'react';
import styles from '../styles/screenStyle';
import {Home} from 'iconsax-react-native';
import {COLOR} from '../theme/color';

export default function Header() {
  return (
    <View style={[styles.header, styles.row]}>
      <View
        style={[
          styles.row,
          styles.alignItems,
          styles.justifyContent,
          styles.rounded,
          styles.bar,
        ]}>
        <View style={styles.row}>
          <Home size="26" style={[styles.textPurple, {marginEnd: 10}]} />
          <Text style={[styles.textPurple, {fontWeight: 'bold'}]}>Home</Text>
          <Text>İçerenköy Mah. Adem Sk.</Text>
        </View>
      </View>
      <View style={styles.barEnd}>
        <Text style={{color: COLOR.GRAY}}>5m</Text>
      </View>
    </View>
  );
}
