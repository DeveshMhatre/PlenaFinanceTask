import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import Colors from '../helpers/Colors';
import Fonts from '../helpers/Fonts';

type ButtonProps = {
  type: 'Primary' | 'Outline';
  label: string;
  handleOnPress: () => void;
};

export default function Button({ type, label, handleOnPress }: ButtonProps) {
  return (
    <Pressable onPress={handleOnPress}>
      <Text style={type === 'Primary' ? styles.primaryBtn : styles.outlineBtn}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primaryBtn: {
    paddingVertical: 18,
    fontFamily: Fonts.ManropeSemiBold,
    fontSize: 14,
    borderRadius: 20,
    backgroundColor: Colors.blue.default,
    textAlign: 'center',
    color: Colors.black.one,
  },
  outlineBtn: {
    paddingVertical: 18,
    fontFamily: Fonts.ManropeSemiBold,
    fontSize: 14,
    borderWidth: 1,
    borderColor: Colors.blue.default,
    borderRadius: 20,
    textAlign: 'center',
    color: Colors.blue.default,
  },
});
