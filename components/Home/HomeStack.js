import React, {useContext, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Fundamentals from './Topmenu/subMenu/Fund_news_chart/Fundamentals/Fundamentals';
import ChartsScreen from './Topmenu/subMenu/Fund_news_chart/Charts/ChartsScreen';
import NewsScreen from './Topmenu/subMenu/Fund_news_chart/News/NewsScreen';
import TopMenu from './Topmenu/mainMenu/topmenu';
import SubMenu from './Topmenu/subMenu/SubMenu';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const HomeStack = createNativeStackNavigator();
const TopmenuStack = createNativeStackNavigator();
const SubMenuStack = createMaterialTopTabNavigator();
const CategoryMenuStack = createNativeStackNavigator();

// const CategoryMenuScreen = () => {
//   return (
//     <CategoryMenuStack.Navigator initialRouteName="CategoryScreen">
//       <CategoryMenuStack.Screen
//         name="CategoryScreen"
//         component={CategoryScreen}
//       />
//       <CategoryMenuStack.Screen name="CoinScreen" component={CoinScreen} />
//     </CategoryMenuStack.Navigator>
//   );
// };

const SubMenuScreen = () => {
  return (
    <SubMenuStack.Navigator
      initialRouteName="Charts"
      backBehavior={'none'}
      screenOptions={{
        swipeEnabled: false,
        tabBarShowLabel: true,
        tabBarShowIcon: true,
        tabBarActiveTintColor: '#E6007A',
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: '#F7F7F7',
          borderRadius: 5,
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#E6007A',
          height: 4,
        },
        tabBarGap: 10,
        tabBarPressColor: '#E6007A10',
      }}>
      <SubMenuStack.Screen name="Fundamentals" component={Fundamentals} />
      <SubMenuStack.Screen name="Charts" component={ChartsScreen} />
      <SubMenuStack.Screen name="News" component={NewsScreen} />
    </SubMenuStack.Navigator>
  );
};

const TopmenuScreen = () => {
  return (
    <TopmenuStack.Navigator
      initialRouteName={'SubMenuScreen'}
      backBehavior="initialRoute"
      screenOptions={{header: () => <SubMenu />}}>
      <TopmenuStack.Screen name="SubMenuScreen" component={SubMenuScreen} />
    </TopmenuStack.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="InitialHome"
      backBehavior="initialRoute"
      screenOptions={{header: () => <TopMenu />}}>
      <HomeStack.Screen name="InitialHome" component={Home} />
      <HomeStack.Screen name="TopMenuScreen" component={TopmenuScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
