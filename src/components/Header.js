import {Text, View} from 'react-native';
import React from 'react';
import styles from '../styles/screenStyle';
import {ArrowDown2, Home} from 'iconsax-react-native';

export default function Header() {
  return (
    <View style={[styles.header, styles.row]}>
      <View
        style={[
          styles.bgWhite,
          styles.row,
          styles.alignItems,
          styles.justifyContent,
          styles.rounded,
          styles.bar,
          {width: '80%'},
        ]}>
        <View style={styles.row}>
          <Home size="26" style={[styles.textPurple, {marginEnd: 10}]} />
          <Text style={[styles.textPurple, {fontWeight: 'bold'}]}>Home</Text>
          <Text>İçerenköy Mah. Adem Sk.</Text>
        </View>
        <ArrowDown2 size="16" style={styles.textPurple} />
      </View>
      <View style={styles.barEnd}>
        <Text>5m</Text>
      </View>
    </View>
  );
}
