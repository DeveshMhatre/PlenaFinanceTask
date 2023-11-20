import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductScreen from './ProductScreen';
import ProductsListScreen from './ProductsListScreen';
import CartScreen from './CartScreen';

export type HomeStackParamList = {
  ProductsList: undefined;
  Product: undefined;
  Cart: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

function HomeScreen() {
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

export default HomeScreen;
