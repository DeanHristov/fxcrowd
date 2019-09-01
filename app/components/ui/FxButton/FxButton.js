import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FormattedMessage} from 'react-intl-native';

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
    <FormattedMessage id={messageKey} style={styles.title}/>
  </TouchableOpacity>
)
