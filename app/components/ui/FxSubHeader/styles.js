import {StyleSheet} from 'react-native';

import {textSize} from '@styles/common';
import Colors from '@styles/colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  titleText: {
    color: Colors.primary,
    fontSize: textSize.S,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  linearGradient: {
    height: 3
  }
});

