import {addLocaleData} from 'react-intl';
import locale_EN from 'react-intl/locale-data/en';
import locale_BG from 'react-intl/locale-data/bg';

import {i18nState} from '@config/initialAppState';

addLocaleData([
    ...locale_EN,
    ...locale_BG,
]);
export default (state = i18nState, {type, payload}) => {
    switch (type) {

        case '@@intl/UPDATE':
        case 'INTL_CHANGE_LOCALE': {
            const {locale, messages} = payload;
            return {
                ...state,
                locale,
                messages,
            };
        }
    }

    return state;
}
