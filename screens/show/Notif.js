import React, {Component} from 'react';
import {
    StyleSheet, 
    Image, 
    View, 
    ScrollView, 
    ListView,
    Text
    } from 'react-native';

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});


export default class Notif extends Component{
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    desc: 'Les niveau de sommeil et d\'activité de Moostik \npourrait être compatible avec un état d\'hyperactivité'
                },
                {
                    desc: ' Absence de 13:10 à 15:50 (4 heures)\n Moostik s\'est bien comporté, son activité globale était conforme à une période d\'absence normale'
                },
                {
                    desc: ' We\'re going to create a static data \ncontacts app using React Native\'s ListView and \nListView Data Source We\'re going\n to create a static data contacts app using React Native\'s ListView\n and ListView Data Source'
                },
            ]),
        }
    }
    
    _renderRow(rowData) {
        return (
            <View style={{borderWidth: 0.5, justifyContent: ''}}>
                <Text>{rowData.desc}</Text>
            </View>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.pictureDog}>
                    <Image 
                        style={{
                            width: 400,
                            height: 190,
                        }}
                        source={
                            require(
                                '/Users/Oussama/Documents/jl_navig/pictures/389145.jpg'
                            )
                        }
                    />
                </View>
                <ScrollView style={styles.list}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow}
                    />
                </ScrollView>
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
    pictureDog: {
        marginTop: 20,
    },
    list: {
        marginTop: 10,
        margin: 5,

    },
  });
  