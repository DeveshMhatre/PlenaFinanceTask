import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import Colors from '../../helpers/Colors';

import MinusIcon from '../Svg/MinusIcon';
import PlusIcon from '../Svg/PlusIcon';

type AddMinusButtonProps = {
  type: 'Primary' | 'Outline';
  label: 'Plus' | 'Subtract';
  handleOnPress: () => void;
  disabled?: boolean;
};

export default function AddMinusButton({
  type,
  label,
  handleOnPress,
  disabled = false,
}: AddMinusButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      onPress={() => handleOnPress()}
      style={type === 'Primary' ? styles.primaryBtn : styles.outlineBtn}
    >
      {label === 'Plus' ? (
        !disabled && <PlusIcon type={type} />
      ) : (
        <MinusIcon type={type} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primaryBtn: {
    width: 30,
    height: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue.default,
  },
  outlineBtn: {
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black.one,
  },
});
