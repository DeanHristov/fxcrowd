import React, {useState, useEffect} from 'react';
import {View, TextInput} from 'react-native';
import {FormattedMessage} from 'react-intl';

import Colors from '@styles/colors';
import styles from './styles';

export default ({messageKey = '', onChange, ...rest}) => {
  const [state, setState] = useState({
    value: '',
  });

  // TODO Add validation UI effects (smooth animations)
  // TODO Extend the component with {minLength, maxLength} properties
  // TODO Show invalidated field (width border style and vibration effect)
  useEffect(() => {
    if (onChange) onChange(state.value)
  }, [state.value]);

  return (
    <View style={styles.container}>
      <FormattedMessage id={messageKey}>
        {msgValue => (
          <TextInput
            {...rest}
            style={styles.textInput}
            underlineColorAndroid={'transparent'}
            placeholderTextColor={Colors.primary}
            placeholder={msgValue}
            onChangeText={value => setState({value })}
            value={state.value}
          />
        ) }
      </FormattedMessage>
    </View>
  );
}
