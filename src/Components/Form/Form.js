import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Keyboard, Pressable, FlatList } from "react-native"
import ResultImc from "../ResultImc/ResultImc";
import styles from "./styles";


export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [massageImc, setMassageImc] = useState("preencha peso e altura")
    const [imc, setImc] = useState(null)
    const [TextButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)
    const [imcList, setImcList]= useState([])

    function imcCalculator() {
        let heightFormat = height.replace(',','.')
        let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2)
        setImcList((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}])
        setImc(totalImc)
    }

    function verificationIMC(){
        if(imc == null){
            setErrorMessage('Campo obrigatorio*')
            Vibration.vibrate();
        }
    }

    function validatorImc() {
        console.log(imcList)
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMassageImc('Seu IMC é igual:')
            setTextButton('Calcular novamente')
            setErrorMessage(null) 
        }
        else{
        verificationIMC()
        setImc(null)
        setTextButton("Calcular")
        setMassageImc("preencha peso e altura")
        } 
    }

    return (
        <View style={styles.formContext}>
            {imc == null ? 
                <Pressable onpres={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder=" Ex: 1.75"
                    keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    value={weight}
                    onChangeText={setWeight}
                    placeholder=" Ex: 75.0"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.ButtonCalculator}
                    onPress={() =>{ 
                    validatorImc()}}>

                    <Text style={styles.textButtonCalculator}>{TextButton}</Text>
                </TouchableOpacity>

            </Pressable>
          :
            <View style={styles.exibitionResultImc}>
                <ResultImc massageResultImc={massageImc} resultImc={imc} />
                <TouchableOpacity
                    style={styles.ButtonCalculator}
                    onPress={() =>{ 
                    validatorImc()}}>
                    <Text style={styles.textButtonCalculator}>{TextButton}</Text>
                </TouchableOpacity>
            </View> 
            }   
            <FlatList 
            horizontal={true}
            showsVerticalScrollIndicator = {false}
            style={styles.listImc}
            data={imcList.reverse}
            renderItem={({item}) =>{
            return(
                <Text style={styles.ResultImcItem}>
                    <Text style={styles.TextResultImcList}>Resultado IMC'S: {item.imc}</Text>
                </Text>
            )
            }}
            keyExtractor={(item) =>{
                item.id
            }}
            />        
        </View>
    )
}