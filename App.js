import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
//SafeAreaView : 배치가 일정한 구역 안에서만 될 수 있도록 설정
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import TaskModal from './components/TaskModal'

export default class App extends React.Component {
  state = {
    todos: [{
      title: '행복심기',
      done: true,
    }, {
      title: '유튜브편집',
      done: false,
      }],
    showModal: false,
  }

  render(){
  return (  
    <SafeAreaView style={styles.container}>
      <Header
        show={()=>{this.setState({showModal:true})}}
      />
      <FlatList
        data={this.state.todos}
        renderItem={({ item }) => {
          return (
            <TodoItem
              title={item.title}
              done={item.done}
            />
          )
        }}
        keyExtractor={(_, index) => {
          return `${index}`
        }}
      />
     
      <TaskModal
        isVisible={this.state.showModal}
        hide={() => {
          this.setState({ showModal: false })
        }}
        />
    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5b8ff',
  },
});

