import React from "react";
import { View, Text, StyleSheet, Modal, Image, TextInput, TouchableOpacity } from "react-native";

export default function Resultado(props) {
    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Image
                    style={styles.imagem}
                    source={require('../assets/gas.png')}
                />
                <Text style={{fontSize: 30, fontWeight: 'bold', color: '#31D05E', marginBottom: 40}}>
                    Compensa usar {props.result}
                </Text>
                <Text style={[styles.text, {fontWeight: 'bold', fontSize: 25}]}>Com os preços:</Text> 
                <Text style={styles.text}>Álcool: R$ {props.valorAlcool}</Text>
                <Text style={styles.text}>Gasolina: R$ {props.valorGasolina} </Text>   
            
                <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botao} onPress={props.fechar} >
                        <Text style={styles.textoBotao}>Calcular novamente</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#212121',
    },
    imagem: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
        width: 200,
        height: 200
    },
    areaBotao:{
        width: 350,
        marginTop: 30
    },
    botao: {
        borderColor: '#D54327',
        borderRadius: 10,
        borderWidth: 2,
        padding: 10,
        width: '100%'
    },
    textoBotao: {
        color: '#D54327',
        textAlign: 'center',
        fontSize: 18,
    },
    text:{
        color: '#FFF',
        padding: 5,
        fontSize: 18
        }

})