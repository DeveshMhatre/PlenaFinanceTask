import { Pressable, StyleSheet, Text, View } from 'react-native';

import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';

import CartIcon from '../Svg/CartIcon';

export default function CartButton({
  openCart,
  inverse = false,
}: {
  openCart: () => void;
  inverse?: boolean;
}) {
  return (
    <Pressable onPress={openCart} style={styles.cartBtn}>
      <CartIcon inverse={inverse} />
      <View
        style={[
          styles.badgeContainer,
          {
            borderColor: inverse ? '#fff' : Colors.blue.default,
          },
        ]}
      >
        <Text style={styles.badgeText}>3</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cartBtn: {
    position: 'relative',
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  badgeContainer: {
    position: 'absolute',
    top: 0,
    left: '75%',
    width: 26,
    height: 26,
    borderWidth: 2,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.yellow.darker,
  },
  badgeText: {
    fontFamily: Fonts.ManropeSemiBold,
    fontSize: 14,
    includeFontPadding: false,
    color: '#FFF',
  },
});
