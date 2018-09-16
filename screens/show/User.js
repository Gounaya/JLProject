import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class User extends Component{
    static navigationOptions= {
        header: null,
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>open User</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      flexDirection: 'column',
    },
    title: {
        color: 'black',
        fontSize: 30,
        justifyContent: 'center',
        marginTop: 50,
    },
  
  });
  