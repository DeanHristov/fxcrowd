import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {FormattedMessage} from 'react-intl';

import FxContainer from '@containers/FxContainer';
import FxButton from '@ui/FxButton';
import FxFooter from '@ui/FxFooter';
import styles from './styles';

export default function HomeScreen({navigation}) {
  const [state, setState] = useState(null);

  return (
    <>
      <FxContainer style={styles.container}>
        <View style={styles.textContainer}>
          <FormattedMessage id={'home-screen:title'}>
            {msg => <Text style={styles.pageTitle}>{msg}</Text>}
          </FormattedMessage>
        </View>
        <View style={styles.btnContainer}>
          <FxButton
            style={styles.button}
            messageKey={'btn:title:deposit'}
            onPress={() => console.log('// TODO deposit redirection')}/>
          <FxButton
            disabled={true}
            style={styles.button}
            messageKey={'btn:title:fast-deposit'}
            onPress={() => console.log('// TODO fast-deposit redirection')}/>
          <FxButton
            style={styles.button}
            messageKey={'btn:title:withdraw'}
            onPress={() => console.log('// TODO withdraw redirection')}/>
        </View>
      </FxContainer>
      <FxFooter/>
    </>

  );
}
