import React, {useState} from 'react';

import {View, Text, TextInput, Button} from 'react-native'
import styles from './style';

import ResultImc from '../resultImc';

export default function Form() {
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [messageImc, setMessageImc] = useState('Preencha a altura e peso')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')

    function imcCalcular() {
        return setImc((weight / (height ** 2)).toFixed(2))
    }

    function validation() {
        if (weight !== null && height !== null) {
            imcCalcular()
            setMessageImc("Seu IMC é igual: ")
            setTextButton("Calcular Novamente")
            return
        }

        setImc(0)
        setTextButton("Calcular")
        setMessageImc("Preencha a altura e peso")
    }

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.labels}>Altura</Text>
                <TextInput
                style={styles.inputs}
                onChangeText={setHeight}
                value={height}
                placeholder='Ex. 1.75'
                keyboardType='numeric'
                />
                
                <Text style={styles.labels}>Peso</Text>
                <TextInput
                style={styles.inputs}
                onChangeText={setWeight}
                value={weight}
                placeholder='Ex. 70.300'
                keyboardType='numeric'
                />

                <Button
                onPress={() => validation()}
                title={textButton}/>
            </View>
            <ResultImc messageImcResult={messageImc} resultImc={imc} />
        </View>
    );
}