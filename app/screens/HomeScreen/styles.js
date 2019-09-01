import {StyleSheet} from 'react-native';

import {flexCenter, textSize} from '@styles/common';
import Colors from '@styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 60
  },
  textContainer: {
    flex: 1,
    ...flexCenter
  },
  btnContainer: {
    flex: 3
  },
  button: {
    marginVertical: 28
  },
  pageTitle: {
    letterSpacing: 0,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: textSize.L,
    color: Colors.primary
  },
});
