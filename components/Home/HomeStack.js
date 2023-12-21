import React, {useContext, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Fundamentals from './Topmenu/subMenu/Fund_news_chart/Fundamentals/Fundamentals';
import ChartsScreen from './Topmenu/subMenu/Fund_news_chart/Charts/ChartsScreen';
import NewsScreen from './Topmenu/subMenu/Fund_news_chart/News/NewsScreen';
// import CategoryMenuScreen from './Topmenu/CategoryMenuScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {getService} from '../../services/aiAlphaApi';
import Loader from '../Loader/Loader';
import {TopMenuContext} from '../../context/topMenuContext';
import {useNavigation} from '@react-navigation/core';
import {Image, View} from 'react-native';

const HomeStack = createNativeStackNavigator();
const TopmenuStack = createMaterialTopTabNavigator();
const SubMenuStack = createMaterialTopTabNavigator();
const CategoryMenuStack = createMaterialTopTabNavigator();

const CategoryMenuScreen = ({subCoins, activeSubCoin, setActiveSubCoin}) => {
  return subCoins[0] !== undefined ? (
    <CategoryMenuStack.Navigator
      initialRouteName="Charts"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarShowIcon: true,
        tabBarActiveTintColor: '#E6007A',
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: '#F7F7F7',
          borderRadius: 5,
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#E6007A',
          height: 4,
        },
        tabBarGap: 10,
        tabBarPressColor: '#E6007A10',
      }}>
      {subCoins.length > 0
        ? subCoins.map(subCoin => (
            <CategoryMenuStack.Screen
              key={subCoin.bot_id}
              name={subCoin.bot_name}
              options={{
                // tabBarIcon: ({color, size}) => (
                //   <View>
                //     <Image
                //       source={{
                //         uri: 'https://cdn-icons-png.flaticon.com/512/3393/3393948.png',
                //       }}
                //       style={{width: 15, height: 15, marginRight: 8}}
                //       resizeMode={'contain'}
                //       tintColor={color}
                //     />
                //   </View>
                // ),
                tabBarActiveTintColor: 'F7F7F7',
                tabBarGap: 5,
                tabBarIndicatorStyle: {
                  height: '100%',
                  backgroundColor: '#E6007A',
                },
                tabBarItemStyle: {
                  flexDirection: 'row',
                  minWidth: '30%',
                  minHeigth: 30,
                  marginHorizontal: 10,
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  backgroundColor: '#EFEFEF',
                  borderWidth: 1,
                  borderColor: '#B8BBBC',
                  borderRadius: 30,
                },
                tabBarLabelStyle: {
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#B8BBBC',
                  textTransform: 'uppercase',
                },
                tabBarContentContainerStyle: {
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#EFEFEF',
                },
                tabBarPressColor: 'transparent',
              }}
              component={SubMenuScreen}
            />
          ))
        : activeSubCoin && (
            <CategoryMenuStack.Screen
              name={activeSubCoin.bot_name}
              component={SubMenuScreen}
              initialParams={{activeCoin: activeSubCoin}}
            />
          )}
    </CategoryMenuStack.Navigator>
  ) : (
    <Loader />
  );
};

const SubMenuScreen = ({activeCoin}) => (
  <SubMenuStack.Navigator
    initialRouteName="Charts"
    screenOptions={{
      tabBarShowLabel: true,
      tabBarShowIcon: true,
      tabBarActiveTintColor: '#E6007A',
      tabBarLabelStyle: {
        fontSize: 13,
        fontWeight: 'bold',
      },
      tabBarStyle: {
        backgroundColor: '#F7F7F7',
        borderRadius: 5,
      },
      tabBarIndicatorStyle: {
        backgroundColor: '#E6007A',
        height: 4,
      },
      tabBarGap: 10,
      tabBarPressColor: '#E6007A10',
    }}>
    <SubMenuStack.Screen name="Fundamentals" component={Fundamentals} />
    <SubMenuStack.Screen name="Charts" component={ChartsScreen} />
    <SubMenuStack.Screen name="News" component={NewsScreen} />
  </SubMenuStack.Navigator>
);

const TopmenuScreen = () => {
  const {activeCoin, updateActiveCoin} = useContext(TopMenuContext);
  const [categories, setCategories] = useState([]);
  const [activeSubCoin, setActiveSubCoin] = useState(
    activeCoin.coin_bots && activeCoin.coin_bots[0].bot_name,
  );
  const navigation = useNavigation();
  useEffect(() => {
    if (activeCoin.coin_bots && activeCoin.coin_bots.length >= 1) {
      setActiveSubCoin(activeCoin.coin_bots[0].bot_name);
    }
  }, [activeCoin]);

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

  const handleButtonPress = category => {
    updateActiveCoin(category);
    if (category.coin_bots.length > 1) {
      navigation.navigate('CategoryMenuScreen', {
        subCoins: activeCoin.coin_bots,
        activeSubCoin,
        setActiveSubCoin,
      });
    } else {
      navigation.navigate('SubMenuScreen', {activeCoin});
    }
  };

  return categories[0] !== undefined ? (
    <TopmenuStack.Navigator
      initialRouteName={categories[0].category}
      screenOptions={{lazy: true, lazyPlaceholder: () => <Loader />}}>
      {categories.map(category => (
        <TopmenuStack.Screen
          key={category.category_id}
          name={category.category}
          options={{
            tabBarScrollEnabled: true,
            tabBarGap: 10,
            tabBarIndicatorStyle: {
              height: 0,
              backgroundColor: 'transparent',
            },
            tabBarItemStyle: {
              minWidth: 60,
              minHeigth: 60,
              marginHorizontal: 10,
              shadowOffset: {
                width: 0,
                height: 0,
              },
              backgroundColor: '#F7F7F7',
              borderWidth: 0,
              borderColor: 'transparent',
              borderRadius: 30,
            },
            tabBarLabelStyle: {
              maxWidth: 60,
              fontSize: 14,
              fontWeight: 'bold',
              color: '#5F6466',
              textTransform: 'capitalize',
            },
            tabBarContentContainerStyle: {
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F7F7F7',
            },
            tabBarIndicator: false,
            tabBarPressColor: 'transparent',
          }}
          component={SubMenuScreen}
          listeners={{
            tabPress: e => {
              handleButtonPress(category);
            },
          }}
        />
      ))}
      <TopmenuStack.Screen
        name="SubMenuScreen"
        component={SubMenuScreen}
        options={{
          tabBarShowLabel: false,
          tabBarShowIcon: false,
          tabBarIndicator: () => null,
          tabBarItemStyle: {
            width: 0,
            height: 0,
          },
          tabBarContentContainerStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F7F7F7',
          },
          tabBarPressColor: 'transparent',
        }}
      />
      <TopmenuStack.Screen
        name="CategoryMenuScreen"
        component={CategoryMenuScreen}
        options={{
          tabBarShowLabel: false,
          tabBarShowIcon: false,
          tabBarIndicator: () => null,
          tabBarItemStyle: {
            width: 0,
            height: 0,
          },
          tabBarContentContainerStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F7F7F7',
          },
          tabBarPressColor: 'transparent',
        }}
      />
    </TopmenuStack.Navigator>
  ) : (
    <Loader />
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="InitialHome"
      screenOptions={{
        headerShown: false,
        lazy: true,
        lazyPlaceholder: () => <Loader />,
      }}>
      <HomeStack.Screen name="InitialHome" component={Home} />
      <HomeStack.Screen name="TopMenuScreen" component={TopmenuScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
