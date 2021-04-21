import React from 'react'
import{
    View,
    Text,
    TouchableOpacity,
    StyleSheet,   
} from 'react-native'
import{Ionicons} from '@expo/vector-icons'
const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                할 일 목록💪
            </Text>
            <TouchableOpacity activeOpacity={0.8}>
                <Ionicons name="ios-add" color="#fff" size={24} style={styles.button}></Ionicons>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 56,
        marginBottom: 16,
        marginLeft: 16,
    },
    title:{
        color: '#212121',
        fontSize: 32,
        fontWeight: '600'
    },
    button: {
        width: 28,
        height: 28,
        borderRadius: 25,
        backgroundColor: '#212121',
        justifyContent: 'center',
        alignItems:'center',

    },
})

export default Header
