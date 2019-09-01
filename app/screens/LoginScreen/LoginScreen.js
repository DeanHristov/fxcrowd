import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {regExEmail} from '@config/initialAppState';
import FxContainer from '@containers/FxContainer';
import FxBrand from '@ui/FxBrand/FxBrand';
import FxButton from '@ui/FxButton';
import FxTextInput from '@ui/FxTextInput';
import styles from './styles.js';

export default function LoginScreen({navigation}) {
  const isValidateForm = () => regExEmail.test(state.email) && state.pass.length >= 4;
  const [state, setState] = useState({
    email: '',
    pass: '',
    isValid: false,
  });
  useEffect(() => {
    setState({
      ...state,
      isValid: isValidateForm(),
    });
  }, [state.email, state.pass]);

  // TODO The validation on each field should be moved in FxTextInput
  // TODO Take an only valid fields

  return (
    <FxContainer style={styles.container}>
      <View style={styles.brandContainer}>
        <FxBrand/>
      </View>
      <View style={styles.formContainer}>
        <FxTextInput
          keyboardType={'email-address'}
          onChange={email => setState({...state, email})}
          messageKey={'input:placeholder:title:username'}/>
        <FxTextInput
          secureTextEntry={true}
          onChange={pass => setState({...state, pass})}
          messageKey={'input:placeholder:title:password'}/>
        <FxButton
          disabled={!state.isValid}
          style={styles.button}
          messageKey={'btn:title:login'}
          onPress={() => navigation.navigate('HomeScreen')}/>
      </View>
    </FxContainer>
  );

}
