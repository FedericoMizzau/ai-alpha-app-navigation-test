import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './subMenuStyles';
import {useNavigation} from '@react-navigation/core';

const CoinMenuCategories = ({activeTab, setActiveTab}) => {
  const {navigation} = useNavigation();

  const onMenuTabPressed = tabOption => {
    setActiveTab('Fundamentals');
    navigation.navigate(tabOption);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Fundamentals' && styles.activeTab]}
          onPress={() => onMenuTabPressed('Fundamentals')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Fundamentals' && styles.activeTabtext,
            ]}>
            Fundamentals
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'Charts' && styles.activeTab]}
          onPress={() => onMenuTabPressed('Charts')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Charts' && styles.activeTabtext,
            ]}>
            Charts
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'News' && styles.activeTab]}
          onPress={() => onMenuTabPressed('News')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'News' && styles.activeTabtext,
            ]}>
            News
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CoinMenuCategories;
