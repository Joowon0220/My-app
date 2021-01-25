import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
//Text: 글 적을수 있는거, like <p> tag
//View: html의 div
//TouchableOpacity: 버튼 눌렀을때 흰색으로 효과주는거
//TextInput: 자바의 input
//Alert: 버튼 눌렀을때 얼럿팝업 띄워서 알려줌!!

import StartButton from './components/StartButton'

export default function App() {
  let content=''
  return (
    
    <View style={styles.container}>
      <TextInput 
        placeholder="고민을 적어주세요"
        onChangeText={(text) =>{//text변화 감지 text가 적히면 content에 text 담아
          content=text
        }}
        style={styles.input}
      
      />
    
    <StartButton showAlert={()=>{
      Alert.alert(content)
    }}/>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    backgroundColor: 'pink',
    flexDirection:'column',
    padding:16,
  },
  first: {
    fontSize: 20,
    color:'red',
    padding:16
  },
  input:{
    width:'100%',
    textAlign: 'center',
    marginBottom:16,
  },
});
