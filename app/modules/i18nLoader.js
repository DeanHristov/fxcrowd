import en from '@i18n/en';
import bg from '@i18n/bg';

export default lang => {
    const locales = { en, bg };

    return locales[lang];
}
