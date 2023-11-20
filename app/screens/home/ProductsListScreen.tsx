import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';

import { HomeStackParamList } from './HomeScreen';

type ProductsListScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'ProductsList'
>;

function ProductsListScreen({ navigation }: ProductsListScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products Screen</Text>
      <Button
        title="Go to Product"
        color={Colors.blue.default}
        onPress={() => navigation.navigate('Product')}
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

export default ProductsListScreen;
