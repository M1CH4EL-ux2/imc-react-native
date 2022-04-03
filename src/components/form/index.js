import React, { useState } from 'react';

import { View, Text, TextInput, Button, Vibration, Pressable, Keyboard } from 'react-native'
import styles from './style';

import ResultImc from '../resultImc';

export default function Form() {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha a altura e peso')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [errorMessage, setErrorMessage] = useState(null)


    function imcCalcular() {
        let heightFormat = height.replace(',', '.')
        return setImc((weight / (height ** 2)).toFixed(2))
    }

    function verification() {
        if (imc === null) {
            Vibration.vibrate()
            setErrorMessage("Campo obrigatório")
        }
    }

    function validation() {
        if (weight !== null && height !== null) {
            imcCalcular()
            setMessageImc("Seu IMC é igual: ")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)

            return
        }

        verification()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha a altura e peso")
    }

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <View>
                <Text style={styles.labels}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={setHeight}
                    value={height}
                    placeholder='Ex. 1.75'
                    keyboardType='numeric'
                />

                <Text style={styles.labels}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder='Ex. 70.300'
                    keyboardType='numeric'
                />

                <Button
                    onPress={() => validation()}
                    title={textButton} />
            </View>
            <ResultImc messageImcResult={messageImc} resultImc={imc} />
        </Pressable>
    );
}