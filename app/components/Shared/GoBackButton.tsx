import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import Colors from '../../helpers/Colors';

import ArrowDownIcon from '../Svg/ArrowDownIcon';

type GoBackButtonProps = {
  handleOnPress: () => void;
};

export default function GoBackButton({ handleOnPress }: GoBackButtonProps) {
  return (
    <Pressable onPress={handleOnPress} style={styles.outlineBtn}>
      <ArrowDownIcon goBack={true} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  outlineBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotateZ: '90deg' }],
    backgroundColor: Colors.black.one,
  },
});
