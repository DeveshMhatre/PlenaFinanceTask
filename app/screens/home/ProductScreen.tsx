import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';

import { HomeStackParamList } from './HomeScreen';

type ProductScreenProps = NativeStackScreenProps<HomeStackParamList, 'Product'>;

function ProductScreen({ navigation }: ProductScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Product Screen</Text>
      <Button
        title="Go to Cart"
        color={Colors.blue.default}
        onPress={() => navigation.navigate('Cart')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontFamily: Fonts.ManropeBold,
    fontSize: 48,
    color: Colors.black.default,
  },
});

export default ProductScreen;
