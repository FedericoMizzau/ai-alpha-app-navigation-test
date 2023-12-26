import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TopMenuContext} from '../../../../context/topMenuContext';
import CoinMenu from './coinMenu/coinMenu';
// import SectionsMenu from './SectionsMenu/SectionsMenu';
import {useNavigation} from '@react-navigation/core';

// All the commented lines may be deleted

const SubMenu = () => {
  const {activeCoin} = useContext(TopMenuContext);

  useEffect(() => {
    if (activeCoin.coin_bots && activeCoin.coin_bots.length >= 1) {
      setActiveSubCoin(activeCoin.coin_bots[0].bot_name);
    }
  }, [activeCoin]);

  const [activeSubCoin, setActiveSubCoin] = useState(
    activeCoin.coin_bots && activeCoin.coin_bots[0].bot_name,
  );

  const navigation = useNavigation();

  // const onMenuTabPressed = section => {
  //   navigation.navigate(section);
  // };


  return (
    <View style={styles.container}>
      {activeCoin.coin_bots && activeCoin.coin_bots.length >= 1 && (
        <CoinMenu
          activeSubCoin={activeSubCoin}
          setActiveSubCoin={setActiveSubCoin}
          subCoins={activeCoin.coin_bots}
        />
      )}
      {/* <SectionsMenu activeTab={activeTab} onMenuTabPressed={onMenuTabPressed} /> */}
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
