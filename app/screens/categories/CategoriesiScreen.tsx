import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories Screen</Text>
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
    textAlign: 'center',
    includeFontPadding: false,
    color: Colors.black.default,
  },
});
