import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'

const StartButton =({
    showAlert,
    disabled,
}) => {
    return(
        <TouchableOpacity 
            activeOpacity={0.5}
            onPress={disabled ? null : showAlert}
        >
            <View style={disabled ? styles.disabled : styles.box}>
                <Text style={styles.text}>
                    시작하기
                </Text>
            </View>
        </TouchableOpacity>
    )
}


const styles =StyleSheet.create({
    box: {
        backgroundColor: 'rgba(213, 184, 255, 1)',
        padding: 16,
    },
    disabled: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 16,
    },
    text:{
        color:'white',
    }
})
export default StartButton