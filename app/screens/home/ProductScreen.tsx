import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { HomeStackParamList } from './HomeScreen';
import CartButton from '../../components/Shared/CartButton';
import GoBackButton from '../../components/Shared/GoBackButton';

type ProductScreenProps = NativeStackScreenProps<HomeStackParamList, 'Product'>;

export default function ProductScreen({
  route,
  navigation,
}: ProductScreenProps) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <GoBackButton handleOnPress={() => navigation.goBack()} />
        <CartButton
          openCart={() => navigation.navigate('Cart')}
          inverse={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    height: '100%',
    backgroundColor: '#FFF',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
