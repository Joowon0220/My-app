import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'

const DeleteButton = ({
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
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