import {StyleSheet} from 'react-native';

import {flexCenter} from '@styles/common';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 60
  },
  brandContainer: {
    flex: 1,
    ...flexCenter,
  },
  formContainer: {
    flex: 1
  },
  button: {
    height: 50,
  }
});
