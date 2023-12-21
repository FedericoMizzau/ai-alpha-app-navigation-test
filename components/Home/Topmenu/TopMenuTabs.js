import {Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MenuItem from './mainMenu/menuItem/menuItem';
import {TopMenuContext} from '../../../context/topMenuContext';
import {getService} from '../../../../services/aiAlphaApi';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

const TopMenuTabs = ({handleButtonPress, categories}) => {
  const {updateActiveCoin} = useContext(TopMenuContext);
  useEffect(() => {
    console.log('Renderizando top menu');
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Tab.Navigator
        id={'topMenuTab'}
        tabBarPosition={'top'}
        screenOptions={{
          showIcon: true,
          showLabel: false,
          indicatorStyle: {backgroundColor: 'transparent'},
        }}
        initialRouteName={'bitcoin'}>
        {categories.map(category => (
          <Tab.Screen
            key={category.category_id}
            name={category.category}
            options={{
              tabBarIcon: ({focused}) => (
                // <MenuItem
                //   icon={category.category}
                //   onPress={() => handleButtonPress(category)}
                //   category={category}
                //   isActive={category.is_active}
                // />
                <TouchableOpacity onPress={() => handleButtonPress(category)}>
                  <Text>{category.category}</Text>
                </TouchableOpacity>
              ),
            }}>
            {() => (
              <View>
                <Text>{category.category}</Text>
              </View>
            )}
          </Tab.Screen>
        ))}
      </Tab.Navigator>
    </GestureHandlerRootView>
  );
};

export default TopMenuTabs;
