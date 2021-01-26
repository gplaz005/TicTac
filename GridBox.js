import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , TouchableOpacity, TextInput } from 'react-native';

const GridBox = props =>{

    
    return (<TouchableOpacity onPress = {props.passfunction}>
    
    <Text style = {styles.table}> { props.gridN}</Text>
    </TouchableOpacity>);
    

};

const styles = StyleSheet.create({

    table:{
        width: 60,
        fontSize: 50,
        color: "blue",
        borderColor: '#FF0099',
        borderWidth:4
      }
});

export default GridBox;