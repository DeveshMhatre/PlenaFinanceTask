import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';

export default function FavouritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Favourites Screen</Text>
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
    color: Colors.black.default,
  },
});
