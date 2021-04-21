import React from 'react'
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native'
import Modal from 'react-native-modal'

const TaskModal = ({
  isVisible,
}) => {
   return (
  <Modal
    isVisible={isVisible}
    avoidKeyboard
  >
    <View style={styles.container}>
      <TextInput placeholder="새로운 신나는일 추가 🐾"/>
    </View>
  </Modal>
  

  )
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin:0,
  },
  container: {
    padding: 16,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 8,
    borderTopRightRadius:8,

  }
})

export default TaskModal;