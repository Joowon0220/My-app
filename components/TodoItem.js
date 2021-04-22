import React from 'react'
import{
    View,
    Text,
    TouchableOpacity,
    StyleSheet,   
} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { FontAwesome } from '@expo/vector-icons'
import DeleteButton from './DeleteButton'

const TodoItem = ({
    title,
    done
}) => {
    return (
        <Swipeable renderLeftActions={() => <DeleteButton />}
            swipeThreshold={10} //10정도만 밀면 나머지는 자동으로 밀림
            maxSwipeDistance={6} //부품이 밀리면 나오는 거리
            slideroutView={<DeleteButton />}
            preventSwipeRight={true} //오른으로 밀리는거는 막기
        >
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
        </Swipeable>
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
        borderRadius: 50,
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
        borderRadius: 50,
    },
})

export default TodoItem