import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'react-router-native';

export default function Btbuoi3(props) {
    

    return (
        <View>
            <View style = {[styles.container, styles.bgGreen]}>
                <View style = {styles.yellow}>

                </View>
                <View style = {styles.yellow}>

                </View>
            </View>
            <View style = {[styles.container,styles.bgPurple]}>
                <View style = {styles.blue}> 
                    
                </View>
                <View style = {styles.blue}> 
                    
                </View>
                <View style = {styles.blue}> 
                    
                </View>
                <View style = {styles.blue}> 
                    
                </View>
            </View>
            <View style = {styles.btnBack}>
            <Link to="/">
            <Text> Back </Text>
            </Link>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : null,
        height : 415,
        borderRadius : 15,
        position : 'relative'
    },
    bgGreen : {
        backgroundColor : '#A1c99A',
        alignItems : 'center'
    },
    bgPurple : {
        marginTop : 20,
        backgroundColor : '#c8c8fA',
        justifyContent : 'center',
        flexWrap : 'wrap',
        flexDirection : 'row',
        
    },
    yellow : {
        width : 350,
        backgroundColor : '#ffffc2',
        height : 120,
        margin : 45,
        borderRadius : 20
    },
    blue : {
        width : 150,
        height :150,
        backgroundColor : '#4f82c0',
        borderRadius : 15,
        margin : 20
    },
    btnBack : {
        position : 'absolute',
        top : 40,
        backgroundColor : 'pink',
    }

}
)
