import React from 'react'
import { StyleSheet, Text, View , Button, TouchableOpacity} from 'react-native'


export default function Todoitem({data, index, completedTaskNo}) {

    const handleCompleted = (index) => {
        completedTaskNo(index)
    }

    return (
        <TouchableOpacity style = {styles.todoItem}
        onPress={() => handleCompleted(index)}> 
            <View style = {styles.square}>

            </View>
            <View style = {styles.todoContent}>
            <Text style = {styles.todoText}>
                {index + 1}. {data}
            </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todoItem : {
        padding : 5,
        height : 50,
        flexDirection : 'row',
        alignItems : 'center',
        backgroundColor : '#FFFF',
        marginBottom : 10,
        borderRadius : 10,
    },
    square : {
        width : 25,
        height : 25,
        backgroundColor : 'red',
        borderRadius : 10
    },
    todoContent : {
        justifyContent : 'center',
        marginLeft : 10,
        maxWidth : '90%'
    },
    todoText : {
        fontFamily : 'Cochin',
        fontSize : 20
    }
})
