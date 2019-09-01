import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {FormattedMessage} from 'react-intl';

import styles from './styles';

export default ({ style, messageKey = '', ...rest}) => (
  <TouchableOpacity
    {...rest}
    activeOpacity={0.7}
    style={[
      styles.container,
      style,
      rest.disabled ? styles.disabled : null
      ]} >
    <FormattedMessage id={messageKey}>
      {msg => <Text  style={styles.title}>{msg}</Text>}
    </FormattedMessage>
  </TouchableOpacity>
)
