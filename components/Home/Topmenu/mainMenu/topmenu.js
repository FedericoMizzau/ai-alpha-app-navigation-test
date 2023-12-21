import React, {useContext, useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import MenuItem from './menuItem/menuItem';
import styles from './topmenuStyles';
import {TopMenuContext} from '../../../../context/topMenuContext';
import {getService} from '../../../../services/aiAlphaApi';
import {useNavigation} from '@react-navigation/core';

const TopMenu = () => {
  const {updateActiveCoin} = useContext(TopMenuContext);
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();
  

  const handleButtonPress = category => {
    updateActiveCoin(category);
    navigation.navigate('TopMenuScreen');
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getService('/get_categories');
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error.message);
      }
    };
    fetchCategories();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map(category => (
          <MenuItem
            key={category.category_id}
            icon={category.category}
            onPress={() => handleButtonPress(category)}
            category={category}
            isActive={category.is_active}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TopMenu;
