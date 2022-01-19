/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Link, NativeRouter, Route, Routes } from 'react-router-native';
import Btbuoi3 from './src/screen/btbuoi3';


const Home = () => {
  return (
    <View style = {styles.home}>
      <Text style = {styles.headerText}> 
        Danh sach Bai tap :
      </Text>
      <Link
      to= "buoi3">
       <Text style = {styles.titleText}> Buoi 3</Text>
      </Link>
    </View>
  )
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
  <NativeRouter>
        <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path= "buoi3" element = {<Btbuoi3/>}/>
        </Routes>
        
  </NativeRouter>

  );
};

const styles = StyleSheet.create({
  home : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  headerText : {
    fontSize : 30,
    fontFamily : 'Cochin'
  },
  titleText : {
    fontFamily : 'Cochin',
    fontStyle : 'italic',
    fontSize : 20,
    borderWidth : 1,
    padding : 7,
    backgroundColor : 'gray'
  }
});

export default App;
