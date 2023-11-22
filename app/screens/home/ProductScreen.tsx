import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';

import { HomeStackParamList } from './HomeScreen';
import Button from '../../components/Shared/Button';

type ProductScreenProps = NativeStackScreenProps<HomeStackParamList, 'Product'>;

export default function ProductScreen({ navigation }: ProductScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Product Screen</Text>
      <Button
        type="Primary"
        label="Go to Cart"
        handleOnPress={() => navigation.navigate('Cart')}
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
    includeFontPadding: false,
    color: Colors.black.default,
  },
});
