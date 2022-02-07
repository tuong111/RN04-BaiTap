import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import bao from '../img/gameappimg/bao.png'
import bgGame from '../img/gameappimg/bgGame.png'
import bua from '../img/gameappimg/bua.png'
import keo from '../img/gameappimg/keo.png'
import player from '../img/gameappimg/player.png'
import playerComputer from '../img/gameappimg/playerComputer.png'
import Screen from '../img/gameappimg/Screen.png'

class Gameapp extends Component {
    
    render() {
        return (
            <View styles={styles.container}>
                <ImageBackground source={bgGame} resizeMode='cover' style={styles.bgGame}>
                    <View style={styles.btnBack}>
                        <Link to="/" >
                            <Text style={styles.txtBack}>{`<Home`}</Text>
                        </Link>
                    </View>
                    <View style={styles.gameScreen}>
                        <View style={styles.topGameScreen}>
                            <View style={styles.itemTop}>
                                <View style={styles.kbb}>
                                    <Image source={keo} style={styles.kbbImg} />
                                </View>
                                <View style={styles.player}>
                                    <Image source={player} style={styles.imgPlayer}/>
                                </View>
                            </View>
                            <View style={styles.itemTop}>
                                <View style={styles.kbb}>
                                    <Image source={keo} style={styles.kbbImg} />
                                </View>
                                <View style={styles.player}>
                                    <Image source={playerComputer} style={styles.imgPlayer}/>
                                </View>
                            </View>
                        </View>
                        <View style={styles.centerGameScreen}>
                            <TouchableOpacity style={styles.itemCenter}>
                                <Image source={keo} style={styles.imgCenter} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bottomGameScreen}>

                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    bgGame: {
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    btnBack: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex : 10
    },
    txtBack: {
        fontSize: 17,
        color: 'blue'
    },
    gameScreen: {
        marginTop : 70,
        marginHorizontal : 10
    },
    topGameScreen: {
        height: '30%',
        width: '100%',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    centerGameScreen : {
        height : '30%',
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
    },
    bottomGameScreen : {
        height : '40%',
        width : '100%',

    },
    kbbImg: {
        width: 100,
        height: 100
    },
    imgCenter : {
        height : 80,
        width : 80
    },
    imgPlayer : {
        height : 100,
        width : 100
    },
    kbb : {
        borderColor : 'yellow',
        borderRadius : 10,
        borderWidth : 2,
        padding : 2,
        backgroundColor : 'black',
    },
    itemCenter : {
        borderWidth : 1,
        borderRadius : 10,
        borderColor : 'yellow',
        backgroundColor :'black',
        marginHorizontal : 10,
        padding : 10
    }
})
export default Gameapp;