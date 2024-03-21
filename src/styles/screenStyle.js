import {StyleSheet, Dimensions} from 'react-native';
import {COLOR} from '../theme/color';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffb300',
  },
  bgPurple: {
    backgroundColor: COLOR.PURPLE,
  },
  textPurple: {
    color: COLOR.PURPLE,
  },
  bgYellow: {
    backgroundColor: COLOR.YELLOW,
  },
  bgWhite: {
    backgroundColor: COLOR.WHITE,
  },
  textYellow: {
    color: COLOR.YELLOW,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  justifyContent: 'center',
  alignItems: 'center',
  bar: {
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderEndEndRadius: 10,
    borderTopEndRadius: 10,
    padding: 10,
  },
  barEnd: {
    height: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wFull: {
    width: width,
  },
  hFull: {
    height: height,
  },
});

export default styles;
