import React, { useEffect, useRef, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';

import { HomeStackParamList } from './HomeScreen';
import BannerCarousel from '../../components/ProductsListComponents/BannerCarousel';
import ProductsListHeader from '../../components/ProductsListComponents/ProductsListHeader';
import RecommendedProducts from '../../components/ProductsListComponents/RecommendedProducts';

export type ProductsListScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'ProductsList'
>;

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images?: string[] | null;
};

export default function ProductsListScreen({
  navigation,
}: ProductsListScreenProps) {
  const firstRender = useRef(true);
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products?limit=10');
      const result = await response.json();

      setProducts(result.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (firstRender.current) {
      fetchProducts();
      firstRender.current = false;
    }
  }, []);

  return (
    <View style={styles.container}>
      <ProductsListHeader handleOpenCart={() => navigation.navigate('Cart')} />

      <ScrollView
        style={{
          marginBottom: 100,
        }}
      >
        <BannerCarousel />
        <Text style={styles.recommendText}>Recommended</Text>
        <RecommendedProducts products={products} navigation={navigation} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FFF',
  },
  recommendText: {
    marginHorizontal: 20,
    fontFamily: Fonts.ManropeRegular,
    fontSize: 30,
    color: Colors.black.default,
  },
});
