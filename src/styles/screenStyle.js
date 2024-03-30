import {StyleSheet, Dimensions} from 'react-native';
import {COLOR} from '../theme/color';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  header: {
    borderColor: '#E4E4E4',
    backgroundColor: 'white',
    borderWidth: 2,
    width: '90%',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 100,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 10,
  },
  wFull: {
    width: width,
  },
  hFull: {
    height: height,
  },
});

export default styles;
