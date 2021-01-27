import React from 'react'
import{
    View,
    Text,
    TouchableOpacity,
    StyleSheet,   
} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

const TodoItem = ({
    title,
    done
}) => {
    return (
        <View style={styles.container}>
        <View style={styles.todoBox}>
            <TouchableOpacity  
                activeOpacity={0.5} 
                style={done ? styles.done : styles.check}
            
            >
              <FontAwesome name="check" color={done ? "#fff" : "#a29bfe"} size={14}/>
            </TouchableOpacity>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#fff'
    },
    todoBox: {
        flexDirection:'row',
        alignItems:'center',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#a29bfe',
    },
    title: {
        fontSize: 16,
        color: '#fd79a8',
    },
    check: {
        borderWidth: 1,
        borderColor: '#a29bfe',
        width:28,
        height: 28,
        justifyContent: 'center', 
        alignItems:'center',
        marginRight: 8,
        borderRadius: '50%',
    },
    done: {
        borderWidth: 1,
        borderColor: '#a29bfe',
        backgroundColor: '#a29bfe',
        width:28,
        height: 28,
        justifyContent: 'center', 
        alignItems:'center',
        marginRight: 8,
        borderRadius: '50%',
    },
})

export default TodoItem