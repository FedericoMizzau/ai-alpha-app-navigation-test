import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Fundamentals from '../Fund_news_chart/Fundamentals/Fundamentals';
import {useNavigation} from '@react-navigation/core';
import CandlestickChart from '../Fund_news_chart/Charts';
import NewsComponent from '../Fund_news_chart/News/NewsComponent';
import styles from '../coinMenu/coinMenuStyles';
import ChartsScreen from '../Fund_news_chart/Charts/ChartsScreen';
import NewsScreen from '../Fund_news_chart/News/NewsScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const CoinMenuTab = createMaterialTopTabNavigator();

const FundNewsChartsTab = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <CoinMenuTab.Navigator
        initialRouteName="Charts"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarLabelStyle: {fontSize: 12},
          tabBarStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            borderWidth: 1,
            borderColor: 'gray',
            height: 30,
          },
        }}
        style={styles.menu}>
        <CoinMenuTab.Screen
          name="Fundamentals"
          component={Fundamentals}
          options={{tabBarLabel: 'Fundamentals'}}
        />
        <CoinMenuTab.Screen
          name="Charts"
          component={ChartsScreen}
          options={{tabBarLabel: 'Charts'}}
        />
        <CoinMenuTab.Screen
          name="News"
          component={NewsScreen}
          options={{tabBarLabel: 'News'}}
        />
      </CoinMenuTab.Navigator>
    </GestureHandlerRootView>
  );
};

export default FundNewsChartsTab;
