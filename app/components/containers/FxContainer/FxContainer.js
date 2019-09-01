import React, {useState} from 'react';
import { SafeAreaView } from 'react-native'

import styles from './styles';

export default function FxContainer({ children, style }) {
    const [state, setState] = useState(null);

    return (
        <SafeAreaView style={[styles.container, style]}>
            {children}
        </SafeAreaView>
    );
}
