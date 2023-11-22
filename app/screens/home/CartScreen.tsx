import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';

import { HomeStackParamList } from './HomeScreen';
import Button from '../../components/Shared/Button';

type CartScreenProps = NativeStackScreenProps<HomeStackParamList, 'Cart'>;

export default function CartScreen({ navigation }: CartScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cart Screen</Text>
      <Button
        type="Primary"
        label="Go to Products"
        handleOnPress={() => navigation.navigate('ProductsList')}
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
