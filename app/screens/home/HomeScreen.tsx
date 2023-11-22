import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductScreen from './ProductScreen';
import ProductsListScreen, { Product } from './ProductsListScreen';
import CartScreen from './CartScreen';

export type HomeStackParamList = {
  ProductsList: undefined;
  Product: { product: Product };
  Cart: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeScreen() {
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
