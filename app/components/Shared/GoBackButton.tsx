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
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotateZ: '90deg' }],
    backgroundColor: Colors.black.one,
  },
});
