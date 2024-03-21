import {View, FlatList, Image} from 'react-native';
import React from 'react';
import styles from '../styles/screenStyle';
import {width} from '../utils/dimension';

export default function ImageCarousel({images}) {
  return (
    <View style={{height: 300, backgroundColor: 'white'}}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            source={{uri: item}}
            style={[
              styles.wFull,
              {width: width, height: 300, objectFit: 'contain'},
            ]}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate="fast"
      />
    </View>
  );
}
