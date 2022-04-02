import React from 'react';
import { View, Text } from 'react-native'
import styles from './style';

export default function ResultImc(props) {
    return(
        <View style={styles.resultBox}>
            <Text>{props.messageImcResult}</Text>
            <Text style={styles.result}>{props.resultImc}</Text>
        </View>
    );
}
