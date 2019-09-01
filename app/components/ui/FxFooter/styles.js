import { StyleSheet } from 'react-native';

import {flexCenter} from '@styles/common';
import Colors from '@styles/colors';

export default StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: Colors.bgFooter,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center'
  },
  iconContainer: {
    width: 48,
    height: 56,
    ...flexCenter,
  },
  textTitle: {
    flex: 3,
    fontSize: 12,
    textDecorationLine: 'underline',
    fontWeight: '300',
    color: Colors.primary,
    paddingRight: 20,
    paddingVertical: 5,
    alignSelf: 'center'
  }
})
