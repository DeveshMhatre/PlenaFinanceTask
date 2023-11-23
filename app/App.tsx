import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
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
  const [showTabBar, setShowTabBar] = useState<boolean>(true);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
          tabBar={(props) => (
            <CustomTabBar showTabBar={showTabBar} {...props} />
          )}
        >
          <Tab.Screen name="Home">
            {(props) => <HomeScreen {...props} setShowTabBar={setShowTabBar} />}
          </Tab.Screen>
          <Tab.Screen name="Categories" component={CategoriesScreen} />
          <Tab.Screen name="Favourite" component={FavouritesScreen} />
          <Tab.Screen name="More" component={MoreScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
