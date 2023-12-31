import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './coinMenuStyles';

const CoinMenu = ({subCoins, activeSubCoin, setActiveSubCoin}) => {

  return subCoins?.length > 1 ? (
    <View style={styles.menu}>
      <View style={styles.subMenu}>
        {subCoins.map(coin => (
          <TouchableOpacity
            key={coin.bot_id}
            style={[
              styles.subMenuButton,
              activeSubCoin === coin.bot_name && styles.activeButton,
            ]}
            onPress={() => setActiveSubCoin(coin.bot_name)}>
            <View style={styles.buttonContainer}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/3393/3393948.png',
                }}
                style={styles.buttonImage}
              />
              <Text
                style={[
                  styles.buttonText,
                  activeSubCoin === coin.bot_name && styles.activeButtonText,
                ]}>
                {coin.bot_name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  ) : (
    <></>
  );
};

export default CoinMenu;
