
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';


export default class introSplash extends Component {
    static navigationOptions= {
        header: null,
    }
    componentWillMount(){ //invoked immediately before mounting occurs
        let Interval = setInterval(() => {
            clearInterval(Interval)
            this.props.navigation.navigate('Add_Device01');
        }, 3000)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Jagger & Lewis</Text>
                <Image
                    style={{
                        width: 220,
                        height: 220,
                        marginVertical: 100,
                    }}
                    source={
                        require(
                            '/Users/Oussama/Documents/jl_navig/pictures/246x0w.jpg'
                        )
                    }
                    />
                <Text style={styles.sousTitle}>Smart Device for dogs</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6303C',
  },
  title: {
    color: 'white',
    fontSize: 40,
    justifyContent: 'center',
    // marginTop: 0,
    marginBottom: 10,
  },
  sousTitle: {
      color: 'white',
      fontSize: 15,
      marginTop: 50,
  }
});
