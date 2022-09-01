import React, {useState} from 'react';
import { View, Text, StyleSheet, Modal, Image, TextInput, TouchableOpacity } from 'react-native';

import Resultado from './src/Components/Resultado';

export default function App(){
  const [alcool, setAlcool] = useState(0);
  const [gasolina, setGasolina] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [resposta, setResposta] = useState('');


  function abrirModal(){
    if (gasolina == 0 || alcool == 0){
      alert('Verifique os campos em branco !');
      return;
    }else{
      let divisao = (alcool/gasolina);
      //console.log(divisao);
      (divisao<0.7) ? setResposta('Álcool') : setResposta('Gasolina');
      
      setModalVisible(true);
    }
   
  }

  function fecharModal(){
    setModalVisible(false);
    setGasolina(0);
    setAlcool(0);
  }

  return(
    <View style={styles.container}>
      
      <View style={{alignItems: 'center'}}>
        <Image 
        style={styles.imagem}
        source={require('./src/assets/logo.png')}
        />
        <Text style={[styles.text, {fontSize: 25}]}>Qual melhor opção ?</Text>
      </View> 
      
      <View style={styles.viewInput}>
        <Text style={[styles.text, {fontSize: 18}]} >Álcool (preço por litro):</Text>
        <TextInput
        style={styles.input}
        placeholder='Ex: 4.60'
        value={alcool}
        keyboardType= 'numeric'
        onChangeText={ (item)=> setAlcool(item)}
        />

        <Text style={[styles.text, {fontSize: 18}]}>Gasolina (preço por litro):</Text>
        <TextInput
        style={styles.input}
        placeholder='Ex: 6.75'
        value={gasolina}
        keyboardType= 'numeric'
        onChangeText={ (item)=> setGasolina(item)}
        />
        
        <TouchableOpacity style={styles.botao} onPress={abrirModal}>
          <Text style={[styles.text, {fontSize: 26}]}>Calcular</Text>
        </TouchableOpacity>
      </View>
      
      <Modal visible={modalVisible} animationType='slide' transparent={true}>
        <Resultado 
        fechar={fecharModal} 
        result={resposta} 
        valorAlcool={alcool} 
        valorGasolina={gasolina} />
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    backgroundColor: '#212121',
  },
  text:{
    color: '#fff',
    fontWeight: 'bold',
    paddingBottom:5 
  },
  imagem: {
    marginTop: 30,
    marginBottom: 30,
    width: 200,
    height: 200
  },
  viewInput:{
    flex:1,
    marginTop: 30,
    marginBottom: 50,
    width: '100%',
    padding: 15,
  }, 
  input:{
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    fontSize: 20,
    borderRadius: 10,
    marginBottom: 15  
  },
  botao:{
    backgroundColor: '#D54327',
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  }
})

