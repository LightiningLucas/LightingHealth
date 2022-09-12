import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    formContext: {
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor: "#FFFFF", 
    },    
    form: {
        width: "100%",
    },
    formLabel: {
        color: '#004AAD',
        fontSize: 18,
        paddingLeft:20,
    },
    input:{
        width:'90%',
        height: 40,
        paddingLeft:10,
        borderRadius: 50,
        margin: 12,
        paddingLeft:10,
        backgroundColor: '#D7D7D7',
    },
    ButtonCalculator:{
        borderRadius:50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#004AAD',
        paddingBottom: 15,
        paddingTop: 15,
        marginLeft: 15,
        marginTop: 35,
    },
    textButtonCalculator: {
        fontSize:20,
        color: '#ffffff',
    },
    errorMessage:{
        fontSize: 12,
        color: '#004AAD',
        fontWeight: 'bold',
        paddingLeft: 20,
    },
    exibitionResultImc:{
        width: "100%",
        height: "50%",
        paddingBottom: 50,

    },
    listImc:{
        marginTop:20,
    },
    ResultImcItem:{
        fontSize:26,
        color: "blue",
        height:50,
        width: "100%",
        paddingRight: 20, 
    },
    TextResultImcList:{
        fontSize:14,
        color:"blue"
    }
    
  });
  
export default styles