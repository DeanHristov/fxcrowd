import AsyncStorage from '@react-native-community/async-storage';
import i18nLoader from '@modules/i18nLoader';

export const regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const credentials = {
    isLogged: false,
    isRemember: false,
    username: 'demo-user',
    password: 'demo-pass',
    email: 'demo.agent@example.com',
};

export const asyncStore = {
    LOCALE: 'app:locale',
    CREDENTIALS_KEY: 'app:credentials',
};

export const i18nState = {
    locale: 'bg',
    languages: ['en', 'bg'],
    messages: i18nLoader('en')
    // messages: async () => {
    //     const locale = await AsyncStorage.getItem(asyncStore.locale);
    //     return i18nLoader(locale || 'en')
    // }
};

export const depositState = [];
export const fastDepositState = [];
export const withdrawState = [];
