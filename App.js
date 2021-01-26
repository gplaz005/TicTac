import { StatusBar } from 'expo-status-bar';
import React , {useEffect, useState} from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GridBox from './GridBox';

export default function App() {

 
  const [newgrid ,setNewGrid] = useState(Array.from({length:3}, num => Array.from({length:3}, num => null)));

  const [player1 , setPlayer1] = useState(true)
  const [palyer2, setPlayer2] = useState(false)
  const [winner, setWinner] = useState(false)

/*if( newgrid[][] === newgrid[][] && newgrid[][] === newgrid[][] ){
  setWinner(true)
  if(newgrid[][] || newgrid[][] || newgrid[][] ) !=== null{
  setWinner(true)
}
}*/


  const checkWinner = () =>{
    if( newgrid[0][0] === newgrid[0][1] && newgrid[0][1] === newgrid[0][2] &&
       (newgrid[0][0] || newgrid[0][1] || newgrid[0][2] ) !== null){
      setWinner(true)
    }
    if( newgrid[1][0] === newgrid[1][1] && newgrid[1][1] === newgrid[1][2] &&
      (newgrid[1][0] || newgrid[1][1] || newgrid[1][2] ) !== null){
      setWinner(true)
    }
    if( newgrid[2][0] === newgrid[2][1] && newgrid[2][1] === newgrid[2][2] &&
      (newgrid[2][0] || newgrid[2][1] || newgrid[2][2] ) !== null){
      setWinner(true)
    }
    if( newgrid[0][0] === newgrid[1][0] && newgrid[1][0] === newgrid[2][0] &&
      (newgrid[0][0] || newgrid[1][0] || newgrid[2][0] ) !== null){
      setWinner(true)
    }
    if( newgrid[0][1] === newgrid[1][1] && newgrid[1][1] === newgrid[2][1] &&
      (newgrid[0][1] || newgrid[1][1] || newgrid[2][1] ) !== null){
      setWinner(true)
    }
    if( newgrid[0][2] === newgrid[1][2] && newgrid[1][2] === newgrid[2][2] &&
      (newgrid[0][2] || newgrid[1][2] || newgrid[2][2] ) !== null) {
      setWinner(true)
    }
    if( newgrid[0][0] === newgrid[1][1] && newgrid[1][1] === newgrid[2][2]&&
      (newgrid[0][0] || newgrid[1][1] || newgrid[2][2] ) !== null ){
      setWinner(true)
    }
    if( newgrid[0][2] === newgrid[1][1] && newgrid[1][1] === newgrid[2][0] &&
      (newgrid[0][2] || newgrid[1][1] || newgrid[2][0] ) !== null){
      setWinner(true)
    }

    console.log(winner)
    console.log(newgrid[2][0])
    console.log(newgrid[2][1])
    console.log(newgrid[2][2])
  }
  
  const newGame = () =>{

    let car =[
      [null,null,null],
      [null,null,null],
      [null,null,null]
    ]
    setNewGrid(car)
    setWinner(false)
  }

  const handlePress = (x,y) => {
    
    let alist = [...newgrid]
    if(player1){
      alist[x][y] = "X"
    //console.log(alist);
    setNewGrid(alist);
    setPlayer1(false)
    setPlayer2(true)
    }
    if(palyer2){
      alist[x][y] = 0
    //console.log(alist);
    setNewGrid(alist);
    setPlayer2(false)
    setPlayer1(true)
    }

    checkWinner()
  }
  
  

  // [col][row]
  let zero = 0
  let one = 1
  let two = 2
  
  //console.log(grid);
  return (
    
    <View style={styles.container}>
      <View style={styles.header}><Text style={styles.headerTitle} >TIC TAC TOE</Text></View>
      <View style ={styles.Row}>
      <GridBox  gridN = {newgrid[zero][zero]} passfunction = {() => handlePress(zero,zero)}/>
      <GridBox  gridN = {newgrid[zero][one]} passfunction = {() => handlePress(zero,one)}/>
      <GridBox  gridN = {newgrid[zero][two]} passfunction = {() => handlePress(zero,two)}/>
      </View>
      <View style ={styles.Row}>
      <GridBox  gridN = {newgrid[one][zero]} passfunction = {() => handlePress(one,zero)}/>
      <GridBox  gridN = {newgrid[one][one]} passfunction = {() => handlePress(one,one)}/>
      <GridBox  gridN = {newgrid[one][two]} passfunction = {() => handlePress(one,two)}/>
      </View>
      <View style ={styles.Row}>
      <GridBox  gridN = {newgrid[two][zero]} passfunction = {() => handlePress(two,zero)}/>
      <GridBox  gridN = {newgrid[two][one]} passfunction = {() => handlePress(two,one)}/>
      <GridBox  gridN = {newgrid[two][two]} passfunction = {() => handlePress(two,two)}/>
      </View>
     

      <Button title = "Start New Game" onPress = {newGame}/>
      {winner ? <Text style={styles.headerTitle}> you won!</Text> : <Text></Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  table:{
    width: 60,
    fontSize: 50,
    color: '#00FFFF',
    borderColor: '#FF0099',
    borderWidth:4
  },
  Row:{
     flexDirection: 'row',
  },
  header:{
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: 'white',
    
    
  },
  headerTitle:{
    color: "#6E0DD0",
    fontSize: 38,
    alignItems: 'center',
    textAlign: 'center',
    fontFamily:
}
});


//(newgrid.map() === 'undefined') ?  <Text> no </Text> : newgrid.map((item) => <Text>{item}</Text>)