
import React, {Component} from 'react'

import {createStackNavigator, StackNavigator} from 'react-navigation' 
//Different between StackNavigator & createStackNavigator ?


import introSplash from './screens/introSplash'
import Add_Device01 from './screens/Add_Device01'
import Add_Device02 from './screens/Add_Device02'
import Show from './screens/Show'
import Accueil from './screens/show/Accueil';
import Calbru from './screens/show/details/Calbru';
import QualiteBien from './screens/show/details/QualiteBien'
import QualiteSom from './screens/show/details/QualiteSom'
import TauxAct from './screens/show/details/TauxAct'


const Navigation = createStackNavigator({ //to navigate between pages. 
  introSplash: introSplash,
  Add_Device01: Add_Device01,
  Add_Device02: Add_Device02,
  Show: Show,
  Accueil: Accueil,
  Calbru: Calbru,
  QualiteBien: QualiteBien,
  QualiteSom: QualiteSom,
  TauxAct: TauxAct,

})
export default Navigation