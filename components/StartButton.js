import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'

const StartButton =({
    showAlert,
}) => {
    return(
        <TouchableOpacity 
            activeOpacity={0.5}
            onPress={showAlert}
        >
            <View style={styles.box}>
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
        padding: 36,
    },
    text:{
        color:'white',
    }
})
export default StartButton