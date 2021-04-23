import React from 'react'
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native'
import Modal from 'react-native-modal'

const TaskModal = ({
  isVisible,
  hide,
}) => {
   return (
  <Modal
       isVisible={isVisible}
       onBackdropPress={hide} //백그라운드 누르면 이벤트 실행
       avoidKeyboard //키보드 탭 올라오면 그만큼 밀림
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

  },
})

export default TaskModal;