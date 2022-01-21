import React, { useState } from 'react'
import { Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import Todoitem from '../components/todoItem'

export default function Todo(props) {
    
const navigate = useNavigate()
const [task , setTask] = useState()
const [taskList , setTaskList] = useState([])
const handleAddTask = () => {
    setTaskList([...taskList,task])
    setTask(null)

}
const handleCompleted = (index) => {
    let cloneTaskList = [...taskList]
    cloneTaskList.splice(index,1)
 Alert.alert('COMPLETED' , 'Do you want to completed ?',[
     {text : 'OK', onPress: () => {
        setTaskList(cloneTaskList)
        // Alert.alert('DONE')
     }},
     {text : 'Cancel', onPress : ()=> {
        //  Alert.alert('Cancel completed Task')
     }}
 ])


}
    return (
        <View style = {styles.container}>
            <View style = {styles.contentWrapper}>
                <View style = {styles.btnBack}>
                    <Button
                    title='<Home'
                    onPress={() => navigate('/')}>
                    </Button> 
                </View>

                <Text style = {styles.title}>
                     TODAY'S TASK : {taskList.length}
                </Text>
            </View>
            <View style = {styles.scrlViewContainer}>
            <ScrollView style= {styles.scrlView}>
            <View style = {styles.todoContainer}>
                {taskList?.map((data , index) => 
                <Todoitem key = {index} data = {data} index = {index}
                completedTaskNo = {(index) => handleCompleted(index)}/>)}
            </View>
            </ScrollView>
            </View>
            <View style = {styles.inputContainer}>
                <View style = {styles.textInput}>
                    <TextInput placeholder='Input a task'
                    onChangeText={(value) => setTask(value)}
                    value={task}/>
                </View>
                <TouchableOpacity
                style={styles.addBtn}
                onPress={() => handleAddTask()}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#dfe6e9',
    },
    contentWrapper : {
        marginTop : 50,
        position : 'relative'
    },
    title : {
        marginTop : 35,
        marginLeft : 20,
        fontWeight : 'bold',
        fontSize : 30
    },
    todoContainer : {
        marginHorizontal : 20,
        marginVertical : 10,
        height : 200
    },
    btnBack : {
        position : 'absolute',
        left : 0
    },
    inputContainer : {
        marginHorizontal : 10,
        alignItems : 'center',
        position : 'absolute',
        bottom : 30,
        width : '90%',
        flexDirection : 'row'
    },
    textInput : {
        borderColor : 'black',
        borderWidth : 1,
        width : 260,
        height : 40,
        borderRadius : 10,
        justifyContent : 'center',
        padding : 10
    },
    addBtn : {
        marginLeft : 30,
        justifyContent : 'center',
        alignItems : 'center',
        width : 60,
        height : 60,
        borderRadius : 30,
        backgroundColor : '#74b9ff'
    },
    scrlViewContainer : {
        height : '74%'
    }
})