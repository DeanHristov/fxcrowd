import React from 'react';
import {View, Text} from 'react-native';
import {FormattedMessage} from 'react-intl';
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'
import Colors from '@styles/colors';
export default ({messageKey = ''}) => {
  return (
    <View style={styles.container}>
      <FormattedMessage id={messageKey}>
        {msgValue => <Text style={styles.titleText}>{msgValue}</Text> }
      </FormattedMessage>
      <LinearGradient colors={Colors.greenLineGradient} style={styles.linearGradient} />
    </View>
  );
}
