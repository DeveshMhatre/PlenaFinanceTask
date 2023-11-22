import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';

import { HomeStackParamList } from './HomeScreen';
import BannerCarousel from '../../components/ProductsListComponents/BannerCarousel';
import ProductsListHeader from '../../components/ProductsListComponents/ProductsListHeader';

type ProductsListScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'ProductsList'
>;

export default function ProductsListScreen({
  navigation,
}: ProductsListScreenProps) {
  return (
    <View style={styles.container}>
      <ProductsListHeader handleOpenCart={() => navigation.navigate('Cart')} />

      <BannerCarousel />

      <Text style={styles.recommendText}>Recommended</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  recommendText: {
    marginHorizontal: 20,
    fontFamily: Fonts.ManropeRegular,
    fontSize: 30,
    color: Colors.black.default,
  },
});
