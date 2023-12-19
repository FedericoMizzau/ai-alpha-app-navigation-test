import React, {useEffect} from 'react';
import Navigation from './navigation/Navigation';
import {SafeAreaView, StyleSheet, StatusBar, Platform, Appearance} from 'react-native';
import { TopMenuContextProvider } from './context/topMenuContext';

const App = () => {

  const colorScheme = Appearance.getColorScheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colorScheme === 'dark' ? '#242427' : 'white' }]}>
      <StatusBar barStyle="dark-content" />
       <TopMenuContextProvider>
           <Navigation />
       </TopMenuContextProvider>
    </SafeAreaView>
  );
};

export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 0 : StatusBar.currentHeight,
    backgroundColor: '#242427',
  },
});

