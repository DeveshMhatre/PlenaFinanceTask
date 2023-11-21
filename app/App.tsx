import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/home/HomeScreen';
import CategoriesScreen from './screens/categories/CategoriesiScreen';
import FavouritesScreen from './screens/favourites/FavouritesScreen';
import MoreScreen from './screens/more/MoreScreen';
import CustomTabBar from './components/BottomTabs/CustomTabBar';

export type BottomTabParamList = {
  Home: undefined;
  Categories: undefined;
  Favourite: undefined;
  More: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
          tabBar={(props) => <CustomTabBar {...props} />}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Categories" component={CategoriesScreen} />
          <Tab.Screen name="Favourite" component={FavouritesScreen} />
          <Tab.Screen name="More" component={MoreScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
