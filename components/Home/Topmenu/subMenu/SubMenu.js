import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TopMenuContext} from '../../../../context/topMenuContext';
import CoinMenu from './coinMenu/coinMenu';
import CoinMenuCategories from './coinMenuCategories/subMenu';

const SubMenu = () => {
  const {activeCoin} = useContext(TopMenuContext);
  const [activeTab, setActiveTab] = useState('Charts');

  useEffect(() => {
    if (activeCoin.coin_bots && activeCoin.coin_bots.length >= 1) {
      setActiveSubCoin(activeCoin.coin_bots[0].bot_name);
    }
  }, [activeCoin]);

  const [activeSubCoin, setActiveSubCoin] = useState(
    activeCoin.coin_bots && activeCoin.coin_bots[0].bot_name,
  );

  return (
    <View style={styles.container}>
      <CoinMenu
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeSubCoin={activeSubCoin}
        setActiveSubCoin={setActiveSubCoin}
        subCoins={activeCoin.coin_bots}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
  },
});

export default SubMenu;
