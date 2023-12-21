import {Text, View} from 'react-native';
import React from 'react';
import CoinMenu from './subMenu/coinMenu/coinMenu';

const CategoryMenuScreen = ({subCoins, activeSubCoin, setActiveSubCoin}) => {
  return (
    <View>
      <CoinMenu
        subCoins={subCoins}
        activeSubCoin={activeSubCoin}
        setActiveSubCoin={setActiveSubCoin}
      />
      <Text>CategoryMenuScreen</Text>
    </View>
  );
};

export default CategoryMenuScreen;
