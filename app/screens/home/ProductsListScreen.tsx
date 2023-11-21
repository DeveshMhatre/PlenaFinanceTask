import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';

import { HomeStackParamList } from './HomeScreen';
import Button from '../../components/Button';

type ProductsListScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'ProductsList'
>;

export default function ProductsListScreen({
  navigation,
}: ProductsListScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products Screen</Text>
      <Button
        type="Outline"
        label="Go to Product"
        handleOnPress={() => navigation.navigate('Product')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: '100%',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: Fonts.ManropeBold,
    fontSize: 48,
    textAlign: 'center',
    color: Colors.black.default,
  },
});