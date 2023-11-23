import React, { useLayoutEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import ProductScreen from './ProductScreen';
import ProductsListScreen, { Product } from './ProductsListScreen';
import CartScreen from './CartScreen';
import { BottomTabParamList } from '../../App';

export type HomeStackParamList = {
  ProductsList: undefined;
  Product: { product: Product };
  Cart: undefined;
};

type HomeScreenProps = BottomTabScreenProps<BottomTabParamList, 'Home'>;

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeScreen({
  setShowTabBar,
  route,
}: { setShowTabBar: any } & HomeScreenProps) {
  useLayoutEffect(() => {
    const focusedRouute = getFocusedRouteNameFromRoute(route);
    if (focusedRouute === 'Product' || focusedRouute === 'Cart') {
      setShowTabBar(false);
    } else {
      setShowTabBar(true);
    }
  }, [route]);

  return (
    <Stack.Navigator
      initialRouteName="ProductsList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ProductsList" component={ProductsListScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}
