import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {FormattedMessage} from 'react-intl-native';

import FxContainer from '@containers/FxContainer';
import FxButton from '@ui/FxButton';
import styles from './styles'

export default function HomeScreen({ navigation }) {
  const [state, setState] = useState(null);

  // useEffect(() => {}, []);

  return (
    <FxContainer style={styles.container}>
      <View style={styles.textContainer}>
        <FormattedMessage id={'home-screen:title'} style={styles.pageTitle}/>
      </View>
      <View style={styles.btnContainer}>
        <FxButton
          style={{marginVertical: 33}}
          messageKey={'btn:title:deposit'}
          onPress={() => console.log('// TODO deposit redirection')}/>
        <FxButton
          disabled={true}
          style={{marginVertical: 33}}
          messageKey={'btn:title:fast-deposit'}
          onPress={() => console.log('// TODO fast-deposit redirection')}/>
        <FxButton
          style={{marginVertical: 33}}
          messageKey={'btn:title:withdraw'}
          onPress={() => console.log('// TODO withdraw redirection')}/>
      </View>
    </FxContainer>
  );
}
