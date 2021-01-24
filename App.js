import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';

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
      <TouchableOpacity //버튼 눌렀을때 흰색으로 눌린 효과 남
        activeOpacity={0.5} //버튼 눌렀을 때 opacity
        onPress={() => { //경보창이 항상 떠 있는게 아니라 버튼을 누른 후에 뜨도록 '나중에'하라는 뜻
          Alert.alert(content) //담긴 text를 content로 불러옴
        }}
      >
      <View style={styles.box}>
      <Text style={styles.first}>몽콩별에 오신 여러분 환영합니다🙋‍♀️ </Text>
      <StatusBar style="auto" />
      </View>
      </TouchableOpacity>
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
