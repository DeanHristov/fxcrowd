import {StyleSheet} from 'react-native';

import {textSize} from '@styles/common';
import Colors from '@styles/colors';

export default StyleSheet.create({
  container: {
    marginBottom: 18,
    height: 46,
    borderWidth: 1,
    borderColor:Colors.primary
  },
  textInput: {
    fontSize: textSize.S,
    fontWeight: 'normal',
    paddingHorizontal: 18,
    color: Colors.primary,
    textAlign: 'center'
  }
})
