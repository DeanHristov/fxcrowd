import React from 'react';
import {Text, View} from 'react-native';
import {FormattedMessage} from 'react-intl';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default () => {
  return (
    <View style={styles.container}>
      <FormattedMessage id={'footer:policy:message'}>
        {msg => (
          <>
            <View style={styles.iconContainer}>
              <Icon size={32} color={styles.textTitle.color} name={'eye'}/>
            </View>
            <Text style={styles.textTitle}>{msg}</Text>
          </>
        )}
      </FormattedMessage>
    </View>
  );
}
