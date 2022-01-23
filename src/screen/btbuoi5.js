import React, { Component } from 'react'
import { Image, StyleSheet, Text, View , TouchableOpacity, TouchableHighlight} from 'react-native'

import angry from '../img/buoi5/angry.png'
import care from '../img/buoi5/care.png'
import haha from '../img/buoi5/haha.png'
import like from '../img/buoi5/like.png'
import love from '../img/buoi5/love.png'
import sad from '../img/buoi5/sad.png'
import { Link } from 'react-router-native'

export default class Btbuoi5 extends Component {
    feeling = [angry,care,haha,like,love,sad]
    state = {
        currentMood : this.feeling[1]
    }
    
    handleMoodChange = (index) => {
        this.setState({
            currentMood : this.feeling[index]
        })
    }

    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.btnBack}>
                <Link to = "/" >
                    <Text style = {styles.txtBack}>{`<Home`}</Text>
                </Link>
                </View>
                <View style = {styles.title}>
                    <Text style = {styles.txt}>
                        Bạn đang cảm thấy như thế nào ?
                    </Text>
                </View>
                <View style = {styles.largeIcon}>
                    <Image source={this.state.currentMood} style = {styles.icon}/>
                </View>
                <View style = {styles.menuIcon}>
                    {
                        this.feeling.map((mood , index) => (
                            <TouchableOpacity onPress={() => this.handleMoodChange(index)} key={index}>
                                <Image source={mood} style = {styles.itemIcon} />
                            </TouchableOpacity>
                        )
                        )
                    }
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        width : null,
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    txt : {
        fontSize : 20
    },
    largeIcon : {
        marginHorizontal : 25,
        marginVertical : 25,
        width : '80%',
        justifyContent : 'center',
        alignItems : 'center'
    },
    icon : {
        height : 200,
        width : 200
    },
    menuIcon : {
        flexDirection : 'row'
    },
    itemIcon :{
        width : 40,
        height : 40,
        marginHorizontal : 8
    },
    btnBack : {
        position : 'absolute',
        top : 50,
        left : 20
    },
    txtBack : {
        fontSize : 17,
        color : 'blue'
    }
})