import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
//SafeAreaView : 배치가 일정한 구역 안에서만 될 수 있도록 설정
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import TaskModal from './components/TaskModal'

export default function App() {
 
  return (  
    <SafeAreaView>
        <Header/>
        <TodoItem title="디자인 시안 완성하기" done={true}/>
      <TodoItem title="썸네일 만들기" done={false} />
      <TaskModal isVisible={false}/>
    </SafeAreaView>
  );
}

