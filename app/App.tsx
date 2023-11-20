import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/home/HomeScreen';
import CategoriesScreen from './screens/categories/CategoriesiScreen';
import FavouritesScreen from './screens/favourites/FavouritesScreen';
import MoreScreen from './screens/more/MoreScreen';

export type BottomTabParamList = {
  Home: undefined;
  Categories: undefined;
  Favourites: undefined;
  More: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        <Tab.Screen name="Favourites" component={FavouritesScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
