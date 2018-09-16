
import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';


export default class Calbru extends Component {
    static navigationOptions= {
        headerTitle: 'Dashboard #Calory',
        headerTintColor: 'black',
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20,}}>NO DATA</Text>
            </View>
        );
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
})