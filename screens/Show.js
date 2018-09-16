import React, {Component} from 'react';
import {createBottomTabNavigator, TabNavigator} from 'react-navigation'


import Accueil from './show/Accueil'
import ShowPuppy from './show/ShowPuppy'
import Notif from './show/Notif'
import User from './show/User'
import AddEvent from './show/AddEvent'

import Icon from 'react-native-vector-icons/FontAwesome'
import Evo from 'react-native-vector-icons/MaterialIcons'
import Not from 'react-native-vector-icons/MaterialIcons'



export default createBottomTabNavigator({

    Accueil:{
        screen: Accueil,
        navigationOptions:{
            tabBarLabel: 'Accueil',
            tabBarIcon: ({tintColor}) =>(
                <Icon name="home" size={30} />
            ),
        }
    },
    ShowPuppy:{
        screen: ShowPuppy,
        navigationOptions:{
            tabBarLabel:'ShowPuppy',
            tabBarIcon: ({tintColor}) =>(
                <Icon name="paw" size={30} />
            )
        }
    },
    Notif:{
        screen: Notif,
        navigationOptions:{
            tabBarLabel:'Notif',
            tabBarIcon: ({tintColor}) =>(
                <Not name="notifications" size={30} />
            )
        }
    },
    User: {
        screen: User,
        navigationOptions:{
            tabBarLabel:'User',
            tabBarIcon: ({tintColor}) =>(
                <Icon name="user" size={30} />
            )
        }
    },
    AddEvent: {
        screen: AddEvent,
        navigationOptions:{
            tabBarLabel:'AddEvent',
            tabBarIcon: ({tintColor}) =>(
                <Evo name="event" size={30} />
            )
        }
    },
},{
    tabBarPosition: 'bottom',
    swipeEnabled: true,
})
