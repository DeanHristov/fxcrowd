import i18nLoader from '@modules/i18nLoader';

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
    messages: i18nLoader('en') // TODO Extend it!
};

export const depositState = [];
export const fastDepositState = [];
export const withdrawState = [];
