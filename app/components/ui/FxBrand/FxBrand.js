import React from 'react';
import {Image, View} from 'react-native';

import brandImage from '@assets/logo.png'
import styles from './styles';


export default props => (
  <View style={[styles.container, props.container]}>
    <Image
      style={[styles.image, props.image]}
      source={brandImage}
    />
  </View>
)
