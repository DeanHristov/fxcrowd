import {StyleSheet } from 'react-native';

import {textSize, flexCenter} from '@styles/common';
import Colors from '@styles/colors';

export default StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: Colors.green,
    ...flexCenter
  },
  title: {
    textTransform: 'capitalize',
    letterSpacing: 0,
    fontSize: textSize.M,
    color: Colors.white,
  },
  disabled: {
    opacity: .6,
    backgroundColor: Colors.disabled
  }
})
