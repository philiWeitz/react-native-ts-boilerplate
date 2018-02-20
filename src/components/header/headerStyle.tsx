
import { StyleSheet, Dimensions } from 'react-native';


export const HEADER_HEIGHT = 40;

const { width: screenWidth } = Dimensions.get('window');


export default StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    width: screenWidth,
  },
});
