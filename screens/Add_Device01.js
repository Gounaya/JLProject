
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, ScrollView, Image} from 'react-native'


export default class Add_Device01 extends Component {
    static navigationOptions= {
        headerTitle: 'Jagger & Lewis',
        headerTintColor: 'black',
        headerLeft: null,
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.title}>Welcome to 1st page</Text>
                    <Image
                        style={{
                            width: 300,
                            height: 300,
                        }}
                        source={
                            require(
                                '/Users/Oussama/Documents/jl_navig/pictures/collier-de-suivi-d-activite-et-de-comportement-jagger-lewis.jpg'
                            )
                        }
                    />
                </ScrollView>
            
                <View style= {styles.buttonContainer}>
                    {/* <View style= {styles.buttonNext}>
                        <Button
                            title="BACK"
                            onPress={() => this.props.navigation.goBack()} 
                        />
                    </View> */}
                    <View style= {styles.buttonBack}>
                        <Button
                            title="SUIVANT"
                            onPress={() => this.props.navigation.navigate('Add_Device02')} 
                        />
                    </View>
                </View>
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
  title: {
    color: 'black',
    fontSize: 30,
    justifyContent: 'center',
    marginTop: 100,
  },
  buttonContainer: {
    backgroundColor: "rgb(211,211,211)",
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 90,
    paddingRight: 90,
    position: 'absolute',
    bottom:0,
  }, 
  buttonBack: {
    left: 0,
  },
  buttonNext: {
    right: 0,
  }
});
