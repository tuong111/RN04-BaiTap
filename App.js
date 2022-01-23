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
import Btbuoi5 from './src/screen/btbuoi5';
import Todo from './src/screen/todo';


const Home = () => {
  const list = [{
    title : 'BT Buoi 3',
    to :'buoi3'
  },
  {
    title : 'BT Buoi 5',
    to : 'buoi5'
  },
  {
    title : 'To Do App',
    to : 'todo'
  },
]
  return (
    <View style = {styles.home}>
      <Text style = {styles.header}>React Native 04</Text>
      <Text style = {styles.headerText}> 
        Danh sach Bai tap :
      </Text>
      {/* <Link
      to= "buoi3">
       <Text style = {styles.titleText}> Buoi 3</Text>
      </Link> */}
      <View style = {styles.menuContainer}>
      {list.map((data , index) => {
        return (
          <View key={index} style = {styles.itemMenu}>
            <Link to ={data.to}>
            <Text style = {styles.titleText}>
              {data.title}
            </Text>
            </Link>
          </View>
        )
      })}
      </View>
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
        <Route path= "todo" element = {<Todo/>}/>
        <Route path='buoi5' element = {<Btbuoi5/>} />
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
    backgroundColor : 'gray',
    margin : 10
  },
  menuContainer : {
    flexDirection : 'row',
    flexWrap : 'wrap',
    marginHorizontal : 25
  },
  header : {
    fontSize : 30,
    fontWeight : '700',
    color : 'green'
  }
});

export default App;
