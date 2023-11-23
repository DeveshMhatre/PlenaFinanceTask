import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';

import CartIcon from '../Svg/CartIcon';

import { RootState } from '../../state/store';

export default function CartButton({
  openCart,
  inverse = false,
}: {
  openCart: () => void;
  inverse?: boolean;
}) {
  const cartItemsCount = useSelector(
    (state: RootState) => state.cart.value.length
  );
  return (
    <Pressable onPress={openCart} style={styles.cartBtn}>
      <CartIcon inverse={inverse} />
      {cartItemsCount > 0 && (
        <View
          style={[
            styles.badgeContainer,
            {
              borderColor: inverse ? '#fff' : Colors.blue.default,
            },
          ]}
        >
          <Text style={styles.badgeText}>
            {cartItemsCount > 9 ? '9+' : cartItemsCount}
          </Text>
        </View>
      )}
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
