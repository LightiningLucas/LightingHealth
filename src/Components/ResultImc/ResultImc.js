import React from "react";
import { View, Text, Share, TouchableOpacity} from "react-native"
import styles from "./style";


export default function resultImc(props){

    const shareResult = async () =>{
        const result = await Share.share({
            message: 'Meu IMC hoje é:' +props.resultImc,
        })
    }

    return(
        <View styles={styles.resultImc}>
            <View style={styles.shareButton}>
            <Text style={styles.information}>{props.massageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>    
                <TouchableOpacity
                    style={styles.shared}
                    onPress={shareResult}>
                    <Text style={styles.textShared}>Compartilhar</Text>    
                </TouchableOpacity> 
            </View>
      
        </View>
    )
}