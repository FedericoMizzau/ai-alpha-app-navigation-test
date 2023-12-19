import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Fundamentals from './Topmenu/subMenu/Fund_news_chart/Fundamentals/Fundamentals';
import SubMenu from './Topmenu/subMenu/SubMenu';
import CandlestickChart from './Topmenu/subMenu/Fund_news_chart/Charts';

const HomeStack = createNativeStackNavigator();
const TopmenuStack = createNativeStackNavigator();
const SubMenuStack = createNativeStackNavigator();

const SubmenuScreen = () => (
  <SubMenuStack.Navigator initialRouteName={'Chart'}>
    <SubMenuStack.Screen name="Fundamentals" component={Fundamentals} />
    <SubMenuStack.Screen name="Chart" component={CandlestickChart}/>
    <SubMenuStack.Screen name="News" component={SubMenu} />
  </SubMenuStack.Navigator>
);

const TopmenuScreen = () => (
  <TopmenuStack.Navigator>
    <TopmenuStack.Screen name="SubMenuScreen" component={SubmenuScreen} />
  </TopmenuStack.Navigator>
);

const HomeStackScreen = () => (
  <HomeStack.Navigator
    initialRouteName="InitialHome"
    screenOptions={{headerShown: false}}>
    <HomeStack.Screen name="InitialHome" component={Home} />
    <HomeStack.Screen name="TopMenuScreen" component={TopmenuScreen} />
  </HomeStack.Navigator>
);

export default HomeStackScreen;
