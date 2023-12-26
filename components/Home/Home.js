import React, {useContext, useState} from 'react';
import {View, ScrollView, Text, StyleSheet, SafeAreaView} from 'react-native';
import TickerTape from './Tickertape/TickerTape';
import styles from './HomeStyles';
import TopStories from './TopStories/topStories';
import Analysis from './Analysis/analysis';
import {TopMenuContext} from '../../context/topMenuContext';
import TopTenGainers from './TopTenGainers/TopTenGainers';
import PriceAction from './PriceAction/PriceAction';
import TopMenu from './Topmenu/mainMenu/topmenu';

const Home = () => {
  const {activeCoin, updateActiveCoin} = useContext(TopMenuContext);
  const hasProperties = Object.keys(activeCoin).length > 0;

  return (
    <SafeAreaView>
      <ScrollView
        bounces={false}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <TickerTape />
        <TopStories />
        <Analysis />
        <TopTenGainers />
        <PriceAction />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
