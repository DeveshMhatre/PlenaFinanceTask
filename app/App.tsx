import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from './helpers/Colors';
import Fonts from './helpers/Fonts';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello World!</Text>
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

export default App;
