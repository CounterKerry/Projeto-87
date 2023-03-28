import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DailyPic from './screens/DailyPic';
import Home from './screens/Home';
import SpaceCraft from './screens/SpaceCraft';
import StarMap from './screens/StarMap';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      initialRouteName='Home'
      screenOptions={{
        headerShow: false
      }}
    >
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='StarMap' component={StarMap}/>
      <Stack.Screen name='DailyPic' component={DailyPic}/>
      <Stack.Screen name='SpaceCraft' component={SpaceCraft}/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
