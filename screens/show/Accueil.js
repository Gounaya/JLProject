import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image,ImageBackground} from 'react-native';
import {createBottomTabNavigator, TabNavigator} from 'react-navigation'

class BackgroundImage extends Component {

    render() {
        return (
            <Image source={require('/Users/Oussama/Documents/jl_navig/pictures/DSC_7926.jpg')}
                  style={styles.backgroundImage}>
            </Image>
        )
    }
}

export default class Accueil extends Component{
    // static navigationOptions= {
    //     headerTitle: 'Accueil',
    //     headerTintColor: 'black',
    // }
    render(){
        return(
            // <BackgroundImage
            //     source={require("/Users/Oussama/Documents/jl_navig/pictures/DSC_7926.jpg")}
            //     style={{width: '100%', height: '100%'}}
            // > 
                <View style={styles.container}>
                        <Button
                            title="Calory"
                            onPress={() => this.props.navigation.navigate('Calbru')} 
                        />
                        <Button 
                            title="Sleep"
                            onPress={() => this.props.navigation.navigate('QualiteBien')} 
                        />
                        <Button 
                            title="Welness"
                            onPress={() => this.props.navigation.navigate('QualiteSom')} 
                        />

                        <Button 
                            title="Level"
                            onPress={() => this.props.navigation.navigate('TauxAct')} 
                        />
                </View>
            //</BackgroundImage>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      flexDirection: 'row',

    },
    title: {
        color: 'white',
        fontSize: 30,
        justifyContent: 'center',
    },
    reglContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    Button: {
        marginBottom: 20,
    }
});
