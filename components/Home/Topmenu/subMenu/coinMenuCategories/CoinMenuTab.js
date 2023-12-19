import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Fundamentals from '../Fund_news_chart/Fundamentals/Fundamentals';
import {useNavigation} from '@react-navigation/core';
import CandlestickChart from '../Fund_news_chart/Charts';
import NewsComponent from '../Fund_news_chart/News';

const CoinMenuTab = createMaterialTopTabNavigator();

const CoinMenuCategories = () => {
  const {navigation} = useNavigation();
  return (
    <CoinMenuTab.Navigator
      initialRouteName="Fundamentals"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: 'powderblue'},
      }}>
      <CoinMenuTab.Screen
        name="Fundamentals"
        component={Fundamentals}
        options={{tabBarLabel: 'Fundamentals'}}
      />
      <CoinMenuTab.Screen
        name="Charts"
        component={CandlestickChart}
        options={{tabBarLabel: 'Charts'}}
      />
      <CoinMenuTab.Screen
        name="News"
        component={NewsComponent}
        options={{tabBarLabel: 'News'}}
      />
    </CoinMenuTab.Navigator>
  );
};

export default CoinMenuCategories;