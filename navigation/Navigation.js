import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../components/HomeScreen/HomeScreen';
import SubMenu from '../components/Home/Topmenu/subMenu/SubMenu';
import CategoryMenuScreen from '../components/Home/Topmenu/CategoryMenuScreen';
import Fundamentals from '../components/Home/Topmenu/subMenu/Fund_news_chart/Fundamentals/Fundamentals';
import ChartsScreen from '../components/Home/Topmenu/subMenu/Fund_news_chart/Charts/ChartsScreen';
import NewsScreen from '../components/Home/Topmenu/subMenu/Fund_news_chart/News/NewsScreen';
import Home from '../components/Home/Home';

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const TopmenuStack = createNativeStackNavigator();

// const TopmenuScreen = () => (
//   <TopmenuStack.Navigator initialRouteName="CategoryMenuScreen">
//     <TopmenuStack.Screen name="SubMenuScreen" component={SubMenu} />
//     <TopmenuStack.Screen
//       name="CategoryMenuScreen"
//       component={CategoryMenuScreen}
//     />
//     <TopmenuStack.Screen name="Fundamentals" component={Fundamentals} />
//     <TopmenuStack.Screen name="Charts" component={ChartsScreen} />
//     <TopmenuStack.Screen name="News" component={NewsScreen} />
//   </TopmenuStack.Navigator>
// );

// const HomeStackScreen = () => (
//   <HomeStack.Navigator
//     initialRouteName="InitialHome"
//     screenOptions={{headerShown: false}}>
//     <HomeStack.Screen name="InitialHome" component={Home} />
//     <HomeStack.Screen name="TopMenuScreen" component={TopmenuScreen} />
//   </HomeStack.Navigator>
// );

const Navigation = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HomeScreen}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
