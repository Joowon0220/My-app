import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'

const DeleteButton = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={style.button}
    >
      <Text style={style.text}>
        삭제
      </Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  button: {
    marginRight: 'auto',
    width: 60,
    height: 60,
    backgroundColor: '#FE5746',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color:'#FFFFFF',
  }
})

export default DeleteButton